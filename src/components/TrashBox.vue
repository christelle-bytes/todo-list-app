
<script setup>
const emit = defineEmits(['delete'])
const props= defineProps (['deleted' , 'restore'])
</script>
<template>
  <div
    @dragover.prevent
    @drop="emit('delete')"
    class="mt-8 flex items-center justify-center gap-3 border-2 border-dashed border-red-200 rounded-2xl py-4 px-6 text-red-300 hover:border-red-400 hover:text-red-500 hover:bg-red-50 transition-all cursor-pointer select-none"
  >

  <div v-for="todo in props.deleted" :key="todo.id" class="flex justify-between items-center mt-2 text-sm text-red-400">
  <span>{{ todo.title }}</span>
  <button @click="emit('restore', todo)" class="text-xs text-blue-400 hover:text-blue-600">Restaurer</button>
</div>

    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
      <path d="M166.2-16c-13.3 0-25.3 8.3-30 20.8L120 48 24 48C10.7 48 0 58.7 0 72S10.7 96 24 96l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0-16.2-43.2C307.1-7.7 295.2-16 281.8-16L166.2-16zM32 144l0 304c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-304-48 0 0 304c0 8.8-7.2 16-16 16L96 464c-8.8 0-16-7.2-16-16l0-304-48 0zm160 72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176z"/>
    </svg>
    <span class="text-sm font-medium">Déposer ici pour supprimer</span>
  </div>
</template>
