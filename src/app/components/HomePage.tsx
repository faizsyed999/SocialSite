import { Fragment, ReactNode } from "react";
import {Post as PostBody} from "../types/Types"
import Post from './Post';
import Styles from '../../styles/homepage.module.scss';

export default function HomePage({feed} : {feed : Array<PostBody>}) : ReactNode {


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
                        <div>
                            <p>User</p>
                        </div>
                    </div>
                    <div className={Styles.menu_item}>
                        <div className={Styles.menu_item}>
                        </div>
                        <div className={Styles.center_area}>
                            {
                                feed.map(post => <Post username={post.user} postContent={post.content} 
                                    likeCount={post.likes} commentCount={post.comments.length.toString()}></Post>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}