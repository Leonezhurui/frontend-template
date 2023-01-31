import {defineStore} from "pinia";
import {Names} from "@/store/store-name";

interface UserInfo{
    name: string;
    age: number
}

const testUser: UserInfo = {
    name: "su",
    age: 20,
};

function wait() {
    return new Promise<UserInfo>(resolve => {
        setTimeout(() => {
            resolve(testUser);
        }, 2000);
    });
}


export const userStore = defineStore(Names.User, {
    state: () => ({
        token: "vafsvadfbdf",
        user: <UserInfo>{
            name: "xiaosu",
            age: 18,
        }
    }),
    getters: {
        isLogin(): boolean {
            return this.token !== "";
        }
    },
    actions: {
        setToken(token: string) {
            this.token = token;
        },
        async asyncSetUser() {
            this.user = await wait();
            this.setToken("123");
        }

    }
});

/**
 * defineStore的第一个参数是该store的唯一标识id
 */


