import { Fragment, ReactNode } from "react";
import {Post} from "../types/Types"
import PostElement from './Post';

export default function HomePage({feed} : {feed : Array<Post>}) : ReactNode {


    return (
        <Fragment>
            <div className="parent_container">
                <div className="site_container">
                    <div className="top_bar">
                        <div className= "menu_item">
                            <p>logo here</p>
                        </div>
                        <div>

                            <div className="menu_item"></div>
                            <div className="menu_item">
                                Discover
                            </div>
                            <div className="menu_item">Settings</div>
                        </div>
                        <div>
                            <p>User</p>
                        </div>
                    </div>
                    <div className="menu_item">
                        <div className="menu_item">
                        </div>
                        <div className="center_area">
                            {
                                feed.map(post => <PostElement username={post.user} postContent={post.content} 
                                    likeCount={post.likes} commentCount={post.comments.length.toString()}></PostElement>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}