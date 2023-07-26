import axios from "axios";
import {baseUrlRick, baseUrlJson, baseUrlSpace} from '../constants'

export const apiRick = axios.create({baseURL: baseUrlRick})
export const apiJson = axios.create({baseURL: baseUrlJson})
export const apiLaunches = axios.create({baseURL: baseUrlSpace})