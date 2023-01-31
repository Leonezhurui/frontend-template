<template>
  <div>{{add(1,23)}}</div>

</template>

<script setup lang="ts">
function add (a:number, b:number):number {
  return a+b;
}

</script>

<style scoped>

</style>
