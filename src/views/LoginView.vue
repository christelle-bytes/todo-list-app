<script setup>
import { users } from '@/services/authService';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router=useRouter()

const message=ref('')
const inputEmail=ref('')
const inputPass=ref('')

function logIn(){
if(inputEmail.value.trim()==='' || inputPass.value===('')) return message.value= "Veillez remplir les champs"

const user=users.find(use=>use.email===inputEmail.value && use.password===inputPass.value)

 if(!user){
    return message.value='Veillez vous inscrire'
 }

 localStorage.setItem("currentUser", JSON.stringify(user))
 router.push('/home')

}

</script>


<template>

<h1>je suis la page login </h1>

<form @submit.prevent="logIn()">

    <input type="email" placeholder="email" v-model="inputEmail">
    <input type="password" placeholder="password" v-model="inputPass">
    <button>Se connecter</button>
    <RouterLink to="/inscription"><button>s'inscrire</button></RouterLink>
    <p>{{ message }}</p>
</form>

</template>


<style scoped>


</style>