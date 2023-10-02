import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";
import Square from "../views/Square.vue";
import Sponsor from "../views/Sponsor.vue";
import Partner from "../views/Partner.vue";
import ContactMe from "../views/ContactMe.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
          path:'/square',
          component: Square,
        },
        {
            path:'/sponsor',
            component: Sponsor,
        },
        {
            path: '/partner',
            component: Partner,
        },
        {
            path: '/contact-me',
            component: ContactMe,
        }
    ]
})