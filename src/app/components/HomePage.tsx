import { Fragment, ReactNode } from "react";
import styles from '../../../styles/homepage.module.scss';
import Post from './Post';

type postcomment = {
    "name": string,
    "content": string
}
type post = {
    user: string,
    content: string,
    "content-type": string,
    "likes": string,
    "comments": Array<postcomment>
}

export default function HomePage() : ReactNode {

    // send req to db
    // if 401 error, then route to login page
    // else, read data from response and populate the feed
    let feed = null;

    const token : string | null = localStorage.getItem("token");
    const endpointBE: string = `process.env.NEXT_PUBLIC_endpoint`; //todo
    const loginResponse =  fetch(endpointBE, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Token" : token || ""
         }
    });
    loginResponse.then(response =>{
        if (response.status == 401) {
            //route to login page
        } else response.json().then((data: Array<post>) => {
            feed = data.map
            (post => <Post username={post.user} postContent={post.content} likeCount={post.likes} commentCount={post.comments.length.toString()}></Post>)
        })    
    })
    

    return (
        <Fragment>
            <div className={styles.parent_container}>
                <div className={styles.site_container}>
                    <div className={styles.top_bar}>
                        <div className={`${styles.logo_item} ${styles.menu_item}`}>
                            <p>logo here</p>
                        </div>
                        <div className={styles.menu_items}>

                            <div className={styles.menu_item}>Home</div>
                            <div className={`${styles.menu_item}`}>
                                Discover
                            </div>
                            <div className={styles.menu_item}>Settings</div>

                        </div>
                        <div>
                            <p>User</p>
                        </div>
                    </div>
                    <div className={styles.content_area}>
                        <div className={styles.left_bar}>
                            {/* <ul className={styles.left_bar_list}> Don't think we need this.
                            <li className={styles.list_item}>Hobbies</li>
                            <li className={styles.list_item}>Discussions</li>
                            <li className={styles.list_item}>Events</li>
                        </ul> */}
                        </div>

                        <div className={styles.center_area}>
                            {/* <Post username={"John Doe"} postContent={"Good Morning!"} likeCount={"0"} commentCount={"0"}></Post>  */}
                            {feed}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}