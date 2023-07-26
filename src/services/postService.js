import {apiJson} from "./apiServices";
import {urls} from "../constants";

export const postService = {
    getAll: () => apiJson.get(urls.posts)
}