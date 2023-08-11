import {apiServices} from "./apiServices";
import {urls} from "../constants";

export const rickService = {
    getAll: () => apiServices.get(urls.rickmorty)
}