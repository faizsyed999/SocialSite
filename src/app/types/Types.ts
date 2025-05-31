export type Feed = {
    username: string,
    posts: Array<Post>
}

export type Post = {
    post: string,
    postType: string,
    likes: Array<string>,
    comments: CommentsList,
}
type CommentsList = { [key: string]: string } //index signature

export type PostComment = {
    "name": string,
    "content": string
}


export type loginResponse = {
    response : string
}


export type tokenSetter =  (token : string | null) => vcoid 
export type feedSetter =  (feed : Feed) => void 



