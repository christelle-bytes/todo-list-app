<script setup>
import TodoCard from './TodoCard.vue';

const props= defineProps(['title', 'status','todos'])
const emit=defineEmits(['drop', 'drag'])

function onDrop(){
  emit('drop',props.status)
}

</script>
<template>
  <div @dragover.prevent @drop="onDrop"
    class="flex-1 bg-white rounded-2xl shadow p-4 min-h-64">
    <h2 class="text-lg font-bold text-blue-500 mb-4 tracking-wide">{{ props.title }}</h2>
    <TodoCard
      v-for="t in props.todos.filter(t => t.status === props.status)"
      :key="t.id"
      :todo="t"
      @drag="emit('drag', $event)"
    />
  </div>
</template>
