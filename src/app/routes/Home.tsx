import { ReactNode, useEffect, useState } from "react";
import HomePage from "../components/HomePage";
import { validateToken } from "../utils/Auth";
import { redirect } from "react-router-dom";
import { Post } from "../types/Types"
import { endpoint } from "../utils/Constants";
import Login from '../components/Login'

export default function Home(): ReactNode {
    let [feed, setFeed] = useState<Array<Post>>([]);

    // validate the stored token
    // if the validation failed
    // go to login
    // if the validation passes
    // go to homepage
    const token: string | null = localStorage.getItem(`token`) || null;
    useEffect(() => {

        if (token) {
            validateToken(token).then(response => {
                if (response.status == 200) {
                    //send feed call
                    //get feed and call setFeed()
                    getFeed(token).then(response => {
                        if (response.status === 200) 
                            response.json().then((data: Array<Post>) => setFeed(data))
                    })
                } 
            })

        } 
    }, [])

    if(feed.length === 0){
        return <Login></Login>;
    }

    //if feed is empty then render the login page
    //otherwise render the home page

    return <HomePage></HomePage>; //todo pass feed params 
}

async function getFeed(token: string): Promise<Response> {
    const response = fetch(`${endpoint}/feed`, {
        headers: {
            "Accept": "application/json",
            "Token": token || ""
        }
    })
    return response;
}

// async function isValidToken(token : string) : boolean{
//     validateToken(token).then((response)=>{
//         if(response.status == 200) return true;
//          else return false;
//     })
// }