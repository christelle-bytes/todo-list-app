// router à construire
//1//
import HomeView from "@/views/HomeView.vue";
import IncriptionView from "@/views/IncriptionView.vue";
import LoginView from "@/views/LoginView.vue";
import { createRouter ,createWebHistory} from "vue-router";

const router =createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'login',
            component:LoginView
        },
        {
            path:'/inscription',
            name:'incription',
            component:IncriptionView
        },
        {
            path:'/home',
            name:'home',
            component:HomeView,
            meta:{ requiresAuth:true }
        }
    ]
})

router.beforeEach((to, from, next) =>{

    const currentUsers=localStorage.getItem('currentUser')

    if(to.meta.requiresAuth && !currentUsers){
        next('/')
    }else{
        next()
    }

})

export default router