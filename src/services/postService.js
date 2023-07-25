import {apiPosts} from "./apiServices";
import {urls} from "../constants";

export const postService = {
    getAll: () => apiPosts.get(urls.posts)
}