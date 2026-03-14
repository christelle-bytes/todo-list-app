<script setup>
import { ref } from 'vue'

const emit = defineEmits(["add"])

const text = ref('')

function submit(){

 if(text.value.trim()==='') return

 emit("add", text.value)

 text.value=''
}

</script>

<template>

<form @submit.prevent="submit">

<input v-model="text" placeholder="nouvelle tâche">

<button>Ajouter</button>

</form>

</template>