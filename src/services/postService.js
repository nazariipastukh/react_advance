import {apiJson} from "./apiServices";
import {urls} from "../constants";

export const postService = {
    getAll: () => apiJson.get(urls.posts.base)
}
export const selectedPostService = {
    getById: (id) => apiJson.get(urls.posts.byId(id))
}
export const userPostsService={
    getByUser:(id)=>apiJson.get(urls.posts.byUserId(id))
}