import TButton from "@/components/TUI/TButton/src/TButton.vue";
import {App} from "vue";

TButton.install = (app: App) => {
    app.component(TButton.name, TButton); //全局组件
};

export {TButton}; //import {TButton}
export default TButton; //import TButton

