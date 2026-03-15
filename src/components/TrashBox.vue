
<script setup>
const emit = defineEmits(['delete'])
</script>
<template>
<div @dragover.prevent @drop="emit('delete')">
  🗑 Supprimer
</div>

</template>
