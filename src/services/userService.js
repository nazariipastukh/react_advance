import {apiJson} from "./apiServices";
import {urls} from "../constants";

export const userService = {
    getAll: () => apiJson.get(urls.users)
}