import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {userStore} from "@/store/user";

const uStore = userStore();

//创建axios实例
const axiosInstance:AxiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config:AxiosRequestConfig ) => {
        // 请求头中携带token信息
        if(uStore.token) {
            return {
                ...config,
                headers: {
                    'Authorization': uStore.token,
                }
            };
        }
        return config;
    },
    (error:AxiosError) => {
        //请求报错
        Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    (error) => {
        console.log("返回报错", error);
    }
);

export default axiosInstance;

