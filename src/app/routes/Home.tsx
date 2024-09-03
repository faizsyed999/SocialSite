import { ReactNode, useState } from "react";
import HomePage from "../components/HomePage";
import { validateToken } from "../utils/Auth";
import { Post } from "../types/Types"
import { endpoint } from "../utils/Constants";
import Login from '../components/Login'

export default function Home(): ReactNode {
    let [feed, setFeed] = useState<Array<Post>>([]);
    const tokenValue: string | null = localStorage.getItem(`token`);
    const [token, setToken] = useState(tokenValue);

    // useEffect(() => {
    if (token) {
        validateToken(token).then(response => {
            if (response.status == 200) {
                getFeed(token).then(response => {
                    if (response.status === 200)
                        response.json().then((data: Array<Post>) => setFeed(data))
                })
            } else return <Login></Login>
        })
    } else return <Login></Login>
    // }, [])

    // if (feed.length === 0) {
    //     return <Login></Login>;
    // }

    //if feed is empty then render the login page
    //otherwise render the home page

    return <HomePage feed={feed}></HomePage>;
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

