import { createApp } from 'vue';
import './main.scss';
import App from './App.vue';
import router from "./router";
import {createPinia} from "pinia";
import TUI from "@/components/TUI";

const pinia = createPinia();

const app = createApp(App);
TUI(app);
app.use(router).use(pinia).mount('#app');


