import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from "path";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:8080",
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    },
  plugins: [
      vue(),
      AutoImport({
          include: [
              /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
              /\.vue$/, /\.vue\?vue/, // .vue
              /\.md$/, // .md
          ],
          imports: ["vue", "vue-router"], //自动导入vue和vue-router相关函数
          eslintrc: {
              enabled: true, // Default `false`
              // filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
              // globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
          },
      }),
  ],
  resolve: {
    //设置路径别名
    alias: {
      '@': resolve(__dirname, './src')
    },
  }
});
