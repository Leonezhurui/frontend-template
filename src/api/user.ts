import axiosInstance from "@/api/axiosConfig";

const userPrefix = "/user";

export const userApi = {
    test() {
        return axiosInstance.get("/api/api/test");
    },
};



