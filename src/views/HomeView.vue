<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import TodoForm from "@/components/TodoForm.vue"
import TodoColumn from "@/components/TodoColum.vue"
import TrashBox from "@/components/TrashBox.vue"

const router=useRouter()
const user=ref(null)

const msg=ref('')

onMounted(()=>{
    const result= localStorage.getItem("currentUser")
    if(!result){
        router.push('/')
    }else{
        user.value=JSON.parse( result)

    }

})

function logout(){
 localStorage.removeItem("currentUser")
 router.push("/")
}



const todos = ref([])
const dragTodo = ref(null)

function save(){
 localStorage.setItem("todos", JSON.stringify(todos.value))
}

onMounted(()=>{

 const data = localStorage.getItem("todos")

 if(data){
  todos.value = JSON.parse(data)
 }

})

function addTodo(title){

 const todo={
  id:Date.now(),
  title:title,
  status:"todo"
 }

 todos.value.push(todo)

 save()

}

function startDrag(todo){

 dragTodo.value=todo

}

function drop(status){

 if(!dragTodo.value) return

 dragTodo.value.status=status

 save()

}

function deleteTodo(){

 if(!dragTodo.value) return

 todos.value=todos.value.filter(t=>t.id!==dragTodo.value.id)

 dragTodo.value=null

 save()

}

</script>


<template>

<h1>Todo List</h1>

<TodoForm @add="addTodo" />

<div class="board">

<TodoColumn
title="TODO"
status="todo"
:todos="todos"
@drag="startDrag"
@drop="drop"
/>

<TodoColumn
title="IN PROGRESS"
status="progress"
:todos="todos"
@drag="startDrag"
@drop="drop"
/>

<TodoColumn
title="CLOSED"
status="done"
:todos="todos"
@drag="startDrag"
@drop="drop"
/>

</div>

<TrashBox @delete="deleteTodo" />

<p v-if="user"> Bienvenue  {{ user.name }}</p>

<button @click="logout">Se déconnecter</button>
</template>


<style scoped>


</style>