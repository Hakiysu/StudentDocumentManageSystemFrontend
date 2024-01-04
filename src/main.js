import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from "./router/router.js";

//add axios
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8443/api'

function checkAuthenticationStatus() {
    // 从 Session Storage 中获取用户信息
    const userString = sessionStorage.getItem("user");

    // 检查用户信息是否存在
    return userString !== null;
}
// 导航守卫
router.beforeEach((to, from, next) => {
    // 检查是否需要认证
    if (to.meta.requireAuth) {
        // 这里可以根据你的认证逻辑进行判断，例如检查是否有登录状态
        const isAuthenticated = checkAuthenticationStatus();

        if (isAuthenticated) {
            // 已认证，允许访问
            next();
        } else {
            // 未认证，重定向到登录页面
            next({
                path: '/login',
                // 将跳转的路由path作为参数，登录成功后跳转到该路由
                query: {redirect: to.fullPath}
            });
        }
    } else {
        // 不需要认证的路由，直接放行
        next();
    }
})

const app = createApp(App)
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
app.provide( '$axios', app.config.globalProperties.$axios = axios)
app.use(ElementPlus)
app.use(router)
app.mount('#app')