<script setup >
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import TodoForm from '@/components/TodoForm.vue'
import TodoColum from '@/components/TodoColum.vue'
import TrashBox from '@/components/TrashBox.vue'

const router = useRouter()

function logout() {
  localStorage.removeItem('currentUser')
  router.push('/')
}


const todos=ref([])
const dragTodo=ref(null)


function addTodo(title){
    const taks={
        id:Date.now(),
        title,
        status:'todo'
    }

    todos.value.push(taks)
    save()
}

function save(){
    localStorage.setItem('todos', JSON.stringify(todos.value))
}
onMounted(()=>{
const data=localStorage.getItem('todos')

if(data) todos.value=JSON.parse(data)
})


function startDrag(todo) {
  dragTodo.value = todo
}

function drop(status) {
  if (!dragTodo.value) return
  dragTodo.value.status = status
  save()
}

const deleted= ref([])
function deleteTodo() {
  if (!dragTodo.value) return
deleted.value.push(dragTodo.value)
todos.value = todos.value.filter(t=>t.id !==dragTodo.value.id)
  dragTodo.value = null
  save()
}
// function deleteTodo() {
//   if (!dragTodo.value) return
// const todos.val
//   dragTodo.value = null
//   save()
// }

function restoreTodos(todo) {
  todos.value.push(todo)
  save()
}

function updateTodo(updateTodo){
  const index = todos.value.findIndex(t=> t.id=== updateTodo.id)
  if (index !== -1){
    todos.value[index]= updateTodo
    save()
  }
}


</script>

<template>
  <div class="min-h-screen bg-blue-50 p-8">
    <div class="max-w-5xl mx-auto">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-blue-600">Mon Board</h1>
        <button @click="logout" class="bg-red-100 hover:bg-red-200 text-red-500 font-semibold px-4 py-2 rounded-lg transition">Se déconnecter</button>
      </div>
      <TodoForm @add="addTodo" />
      <div class="flex gap-6 mt-8">

        <TodoColum title="TODO" status="todo" :todos="todos" @drag="startDrag" @drop="drop" @update="updateTodo"  />
        <TodoColum title="IN PROGRESS" status="progress" :todos="todos" @drag="startDrag" @drop="drop" @update="updateTodo"  />
        <TodoColum title="DONE" status="done" :todos="todos" @drag="startDrag" @drop="drop" @update="updateTodo" />
      </div>
      <TrashBox :deleted="deleted"  @delete="deleteTodo"  @restore="restoreTodos"/>
    </div>
  </div>
</template>


