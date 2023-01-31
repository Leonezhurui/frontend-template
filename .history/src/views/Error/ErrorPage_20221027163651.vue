<template>
  <div>{{add(1,23)}}</div>

</template>

<script lang="ts">
export default {
  name: "errorPage",
  setup() {
    let add = (a:number, b:number):number => {
      return a+b;
    }
    return {
      add,
    }
  }
}
</script>


<style scoped>

</style>
