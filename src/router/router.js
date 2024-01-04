import {createRouter, createWebHistory} from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Home from "../components/Home.vue";
import AppIndex from "../components/home/AppIndex.vue";

import StuDocManage from "../components/stuDocManage/StuDocManage.vue";
import StuDocEdit from "../components/stuDocManage/StuDocEdit.vue";

import UserdataManage from "../components/userdataManage/UserdataManage.vue";



const routes = [
    {
        path: '/',
        name: 'Default',
        redirect: '/home',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'AppIndex',
                component: AppIndex,
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/stuDocManage',
                name: 'StuDocManage',
                component: StuDocManage,
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/stuDocEdit',
                name: 'StuDocEdit',
                component: StuDocEdit,
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/userdataManage',
                name: 'UserdataManage',
                component: UserdataManage,
                meta: {
                    requireAuth: true
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }

]


const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
