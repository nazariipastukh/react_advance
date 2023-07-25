import {apiLaunches} from "./apiServices";
import {urls} from "../constants";

export const launchService = {
    getAll: () => apiLaunches.get(urls.launches)
}