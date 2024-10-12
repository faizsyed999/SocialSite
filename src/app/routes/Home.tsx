import { ReactNode, useState, useEffect } from "react";
import HomePage from "../components/HomePage";
import { Feed } from "../types/Types"
import { endpoint } from "../utils/Constants";
import Login from '../components/Login'

export default function Home(): ReactNode {
    let [feed, setFeed] = useState<Feed>({username: "", posts: []})
    let [token, setToken] = useState(localStorage.getItem(`token`))
    
    useEffect(() => {
        const fetchFeed = async (): Promise<void> => {
            if (token) {
                localStorage.setItem(`token`, token)

                const response = await getFeed(token);
                                
                if (response.status === 200){
                    const responseData = await response.json()
                    setFeed(responseData)
                }
                else if(response.status == 401)
                    setToken(null)
            } 
        }
        fetchFeed();
    }, [token])
        
    if (token === null) return <Login setToken={setToken}></Login>;

    return <HomePage feed={feed} setToken={setToken}></HomePage>;
}

async function getFeed(token: string): Promise<Response> {
    const response = fetch(`${endpoint}/user/feed`, {
        headers: {
            "Accept": "application/json",
            "Token": token || ""
        }
    })
    return response;
}

