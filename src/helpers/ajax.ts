import axios, {AxiosInstance} from "axios";
import store from "./store";
import {ROOT_API} from "./config";
import AxiosCommon from "./AxiosCommon";

export function CreateAxiosInstance(): AxiosInstance {
    const ajax = axios.create({
        baseURL: ROOT_API,
    });

    ajax.defaults.headers.common["Content-Type"] = "application/json";
    ajax.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    ajax.defaults.headers.common["Access-Control-Allow-Credentials"] = String(true);
    AxiosCommon.applyRequestInterceptor(ajax, null, store);
    AxiosCommon.applyResponseInterceptor(ajax, null, store);

    return ajax;
}

const defaultInstance = CreateAxiosInstance();

export default defaultInstance;

