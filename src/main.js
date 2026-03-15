//2//
import './assets/main.css' // charge les styles globaux (Tailwind)
import { createApp } from 'vue' // fonction qui crée l'application Vue
import App from './App.vue' // le composant racine, point d'entrée de l'UI
import router from './router' // notre configuration des routes

const app = createApp(App) // on crée l'instance de l'app avec App.vue comme racine

app.use(router) // on branche le router à l'app pour activer la navigation

app.mount('#app') // on injecte l'app dans la div #app de index.html
