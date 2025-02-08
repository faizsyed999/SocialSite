import { Fragment, ReactNode, useState } from "react";
import { Feed, Post as PostBody } from "../types/Types"
import Post from './Post';
import Styles from '../../styles/homepage.module.scss';
import { tokenSetter } from "../types/Types";


export default function HomePage({ feed, setToken }: { feed: Feed, setToken: tokenSetter }): ReactNode {

    console.log(typeof feed)
    console.log(JSON.stringify(feed))
    const username = feed.username
    const LogoutFlow = async (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        e.preventDefault()
        localStorage.removeItem(`token`)
        setToken(null)
    }
    const togglemenu = function(){setToggled(!isMobileMenuToggled)}

    const [isMobileMenuToggled, setToggled] = useState(false);

    return (
        <Fragment>
            <div className={Styles.parent_container}>
                <div className={Styles.site_container}>
                    <div className={Styles.top_bar}>
                        <div className={Styles.hamburger} onClick={togglemenu}>
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                                <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                                <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>
                        {isMobileMenuToggled && 
                        <div className={Styles.Vertical_Menu}>
                            <ul className={Styles.Vertical_Menu_List}>
                                <li className={Styles.Vertical_pad}>Discover</li>
                                <li className={Styles.Vertical_pad}>Settings</li>
                            </ul>
                        </div>}
                        <div className={Styles.menu_item}>
                            <p>LOGO</p>
                        </div>
                        <div className={Styles.menu_items_list}>
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
                    </div>
                    <div className={Styles.menu_item}>
                        {/* <div className={Styles.menu_item}>
                        </div> */}
                        <div className={Styles.center_area}>
                            {
                                feed.posts.map((post: PostBody) => <Post username={username} postContent={post.post}
                                    likeCount={String(post.likes.length)} commentCount={post.comments.length.toString()}></Post>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}