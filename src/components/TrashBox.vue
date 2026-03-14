<script setup>

const emit = defineEmits(["delete"])

</script>

<template>

<div class="trash"
@dragover.prevent
@drop="$emit('delete')"
>

🗑 SUPPRIMER

</div>

</template>

<style scoped>

.trash{
margin-top:30px;
padding:20px;
border:2px dashed red;
width:200px;
text-align:center;
}

</style>