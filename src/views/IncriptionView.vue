<script setup >
import { addUser } from '@/services/authService';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const nom=ref('')
const email=ref('')
const password=ref('')
const confirm=ref('')
const message =ref('')
const router=useRouter()

function inscrire(){
  if(nom.value.trim()===''|| email.value.trim()==='' || password.value==='' || confirm.value==='' ){
    return message.value= 'Tous les champs sont obligatoires'
  }
  if(password.value!== confirm.value){
    return message.value = 'les mots de passes sont differents'
  }
  const newUser={
    nom:nom.value,
    email:email.value,
    password:password.value,
  }

  addUser(newUser)
  setTimeout(() => {
    
    router.push('/')
  }, 2000);
  
message.value= 'Inscription reussir avec succes'
  nom.value=''
  email.value=''
  password.value=''
}


</script>

<template>
  <div class="min-h-screen bg-blue-50 flex items-center justify-center">
    <div class="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
      <h1 class="text-2xl font-bold text-blue-600 mb-6 text-center">Inscription</h1>
      <form @submit.prevent="inscrire()" class="flex flex-col gap-4">
        <input type="text" placeholder="Nom" v-model="nom"
          class="border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <input type="email" placeholder="Email" v-model="email"
          class="border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <input type="password" placeholder="Mot de passe" v-model="password"
          class="border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <input type="password" placeholder="Confirmer mot de passe" v-model="confirm"
          class="border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <p v-if="message" class="text-red-500 text-sm">{{ message }}</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition">S'inscrire</button>
        <RouterLink to="/" class="text-center text-blue-500 hover:underline text-sm">Déjà un compte ? Se connecter</RouterLink>
      </form>
    </div>
  </div>
</template>
