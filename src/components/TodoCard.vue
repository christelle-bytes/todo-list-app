<script setup>

const props = defineProps(["todo"])

const emit = defineEmits(["drag"])

function dragStart(){
 emit("drag", props.todo)
}

</script>

<template>

<div class="card" draggable="true" @dragstart="dragStart">

{{ todo.title }}

</div>

</template>

<style scoped>

.card{
background:#eee;
padding:10px;
margin:10px 0;
cursor:grab;
}

</style>