import {apiRick} from "./apiServices";
import {urls} from "../constants";

export const rickService = {
    getAll: () => apiRick.get(urls.rickmorty)
}