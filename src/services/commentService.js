import {apiJson} from "./apiServices";
import {urls} from "../constants";

export const commentService = {
    getAll: () => apiJson.get(urls.comments)
}