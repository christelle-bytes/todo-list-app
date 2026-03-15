
<!-- 4 -->
<script setup >
import { users } from '@/services/authService';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email=ref('')
const password=ref('')
const message=ref('')
const router=useRouter()

function login(){
  if(email.value.trim()==='' || password.value==='' ){
    return message.value= 'Tous les champs sont obligatoires'
  }

  const user=users.find(use=>use.email===email.value && use.password===password.value)

  if(!user){
    return message.value="Veillez vous inscrire"
  }

  localStorage.setItem('currentUser',JSON.stringify(user))
  router.push('/home')

  email.value=''
  password.value=''


}

</script>

<template>
  <div class="min-h-screen bg-blue-50 flex items-center justify-center">
    <div class="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
      <h1 class="text-2xl font-bold text-blue-600 mb-6 text-center">Connexion</h1>
      <form @submit.prevent="login()" class="flex flex-col gap-4">
        <input type="email" placeholder="Email" v-model="email"
          class="border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <input type="password" placeholder="Mot de passe" v-model="password"
          class="border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <p v-if="message" class="text-red-500 text-sm">{{ message }}</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition">Se connecter</button>
        <RouterLink to="/inscription" class="text-center text-blue-500 hover:underline text-sm">Pas encore de compte ? S'inscrire</RouterLink>
      </form>
    </div>
  </div>
</template>