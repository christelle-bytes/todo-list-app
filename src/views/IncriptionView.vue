<script setup>
// import router from '@/router';
import { addUser, users } from '@/services/authService';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router=useRouter()


const nom=ref('')
const email=ref('')
const password=ref('')
const confirm=ref('')
let msg =ref('')

function insrire(){
    if(nom.value=== '' || email.value=== ''){ return msg.value= "veillez remplire tous les champs"}
const user= users.find(use=>use.name=== nom.value || use.email=== email.value)
if(user) return msg.value="nom ou email déjà utiliser"

if(password.value !== confirm.value) return  msg.value= "les mots de pass ne correspondes pas "

const newUser={
    name:nom.value,
    email: email.value,
    password: password.value
}

addUser(newUser)
setTimeout(()=>{
    router.push('/')

},2000)

nom.value=''
email.value=''
password.value=''
confirm.value=''
msg.value="Inscription reussie"

}


</script>


<template>

<h1>je suis la page inscription</h1>

<form v-on:submit.prevent="insrire()">
    <input  v-model="nom" type="text" placeholder="nom?">
    <input type="email" placeholder="email?" v-model="email">
    <input type="password" placeholder="pass word" v-model="password">
    <input type="password" placeholder="pass Confirm" v-model="confirm">
    <button type="submit"> S'inscrire </button>

    <p>{{ msg }}</p>
    <!-- <RouterLink to="/">Se connecter</RouterLink> -->
</form>

</template>


<style scoped>


</style>