import axios from "axios";
import {baseUrlRick, baseUrlPosts, baseUrlSpace} from '../constants'

export const apiRick = axios.create({baseURL: baseUrlRick})
export const apiPosts = axios.create({baseURL: baseUrlPosts})
export const apiLaunches = axios.create({baseURL: baseUrlSpace})