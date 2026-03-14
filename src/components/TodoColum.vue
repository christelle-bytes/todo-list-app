<script setup>

import TodoCard from "./TodoCard.vue"

const props = defineProps(["title","status","todos"])

const emit = defineEmits(["drop","drag"])

function drop(){
 emit("drop", props.status)
}

</script>

<template>

<div class="col" @dragover.prevent @drop="drop">

<h2>{{ title }}</h2>

<TodoCard
v-for="t in todos.filter(t=>t.status===status)"
:key="t.id"
:todo="t"
@drag="$emit('drag',$event)"
/>

</div>

</template>

<style scoped>

.col{
width:200px;
min-height:300px;
border:1px solid black;
padding:10px;
}

</style>