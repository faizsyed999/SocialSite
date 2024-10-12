import { Fragment, ReactNode } from "react";
import {Feed, Post as PostBody} from "../types/Types"
import Post from './Post';
import Styles from '../../styles/homepage.module.scss';
import { tokenSetter } from "../types/Types";


export default function HomePage({feed, setToken} : {feed : Feed, setToken : tokenSetter }) : ReactNode {

    console.log(typeof feed);
    console.log(JSON.stringify(feed));
    const username = feed.username; 
    const LogoutFlow =  async (e: React.MouseEvent<HTMLLIElement, MouseEvent>)=>{
        e.preventDefault();
        localStorage.removeItem(`token`)
        setToken(null)
    }

    return (
        <Fragment>
            <div className={Styles.parent_container}>
                <div className={Styles.site_container}>
                    <div className={Styles.top_bar}>
                        <div className= {Styles.menu_item}>
                            <p>logo here</p>
                        </div>
                        <div>

                            <div className={Styles.menu_item}></div>
                            <div className={Styles.menu_item}>
                                Discover
                            </div>
                            <div className={Styles.menu_item}>Settings</div>
                        </div>
                        <div className={Styles.user_dropdown}>
                            <a href="#" className={Styles.user_dropdown_button}>User</a>
                            <div className={Styles.user_dropdown_box}>
                                <ul className={Styles.user_dropdown_list}>
                                    <li onClick={LogoutFlow}>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>c
                    <div className={Styles.menu_item}>
                        <div className={Styles.menu_item}>
                        </div>
                        <div className={Styles.center_area}>
                            {  
                                feed.posts.map((post : PostBody) => <Post username={username} postContent={post.post} 
                                    likeCount={String(post.likes.length)} commentCount={post.comments.length.toString()}></Post>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}