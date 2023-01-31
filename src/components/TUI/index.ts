import {App, AsyncComponentLoader, defineAsyncComponent} from "vue";

//全局安装组件
export default function TUI(app: App) {
    // 获取当前路径任意文件夹下的 index.vue 文件
    const components = import.meta.glob('./*/src/*.vue');
    // 遍历获取到的组件模块
    for (const [key, value] of Object.entries(components)) {
        // 拼接组件注册的 name
        const componentName = key.replace('./', '').split('/')[0];
        // 通过 defineAsyncComponent 异步导入指定路径下的组件
        app.component(componentName, defineAsyncComponent(value as AsyncComponentLoader));
    }
}


