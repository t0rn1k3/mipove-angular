export interface CommentsInterface {
    id : string
    body : string
    username : string
    userId : string
    parentId : string | null
    createdAt : string
}