<script setup >
import { ref } from 'vue';
 const emit =defineEmits(["add"])

const text=ref('')

function submit() {
  emit('add',text.value)
  text.value=''

}
</script>

<template>
  <form @submit.prevent="submit()" class="flex gap-3">
    <input type="text" placeholder="Nouvelle tâche..." v-model="text"
      class="flex-1 border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white">
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition">Ajouter</button>
  </form>
</template>
