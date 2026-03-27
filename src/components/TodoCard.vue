<script setup >
import { ref } from 'vue'


const props=defineProps(['todo'])
const emit=defineEmits(['drag','update'])

const editing= ref(false)
const newTitle= ref(props.todo.title)

function dragStart(){
  emit('drag',props.todo)
}

function save(){
  emit('update' ,{...props.todo , title:newTitle.value} )
  editing.value= false
}

</script>

<template>
  <div draggable="true" @dragstart="dragStart"
    class="bg-white border border-blue-100 rounded-lg px-4 py-3 mb-3 shadow-sm cursor-grab hover:shadow-md hover:border-blue-300 transition">

    <!-- Mode édition -->
    <div v-if="editing" class="flex gap-2 items-center">
      <input
        type="text"
        v-model="newTitle"
        class="flex-1 border border-blue-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        @keyup.enter="save"
        @keyup.esc="editing = false"
      />
      <button
        @click="save"
        class="bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md transition"
      >✓</button>
      <button
        @click="editing = false"
        class="bg-gray-100 hover:bg-gray-200 text-gray-500 text-xs font-semibold px-3 py-1 rounded-md transition"
      >✕</button>
    </div>

    <!-- Mode affichage -->
    <div v-else class="flex justify-between items-center group">
      <span class="text-sm text-gray-700">{{ props.todo.title }}</span>
      <button
        @click.stop="editing = true"
        class="opacity-0 group-hover:opacity-100 text-blue-400 hover:text-blue-600 transition p-1 rounded"
        title="Modifier"
      >
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
          <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/>
        </svg>
      </button>
    </div>

  </div>
</template>
