import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import IncriptionView from '@/views/IncriptionView.vue'
import TodoCard from '@/components/TodoCard.vue'
import TodoColum from '@/components/TodoColum.vue'
import TodoForm from '@/components/TodoForm.vue'
import TrashBox from '@/components/TrashBox.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
     path:"/",
     name:"login",
     component:LoginView
    },
    {
     path:"/inscription",
     name:"inscription",
     component:IncriptionView
    },
    {
     path:"/home",
     name:"home",
     component:HomeView,
     meta:{ required:true}
    },
    {
     path:"/trash",
     name:"trash",
     component:TrashBox,
    },
    {
     path:"/form",
     name:"form",
     component:TodoForm,
    },
    {
     path:"/colum",
     name:"colum",
     component:TodoColum,
    
    },
    {
     path:"/card",
     name:"card",
     component:TodoCard,
    },
  ],
})

 router.beforeEach((to, from, next)=>{
  const currentUser= localStorage.getItem("currentUse")

  if(to.meta.required && !currentUser){
    return "/"
  }

    if (to.path === "/" && currentUser) {
    return { path: "/home" }
  }

 })

export default router
