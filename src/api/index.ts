import {userApi} from "@/api/user";

const apis = {
    ...userApi,
};

export function useApi() {
    return apis;
}


