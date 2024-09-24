export type Post = {
    user: string,
    content: string,
    "content-type": string,
    "likes": string,
    "comments": Array<PostComment>
}

export type PostComment = {
    "name": string,
    "content": string
}



