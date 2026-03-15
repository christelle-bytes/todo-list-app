<script setup >

const props=defineProps(['todo'])
const emit=defineEmits(['drag'])

function dragStart(){
  emit('drag',props.todo)
}
</script>

<template>
  <div draggable="true" @dragstart="dragStart"
    class="bg-white border border-blue-100 rounded-lg px-4 py-3 mb-3 shadow-sm cursor-grab hover:shadow-md hover:border-blue-300 transition">
    {{ props.todo.title }}
  </div>
</template>
