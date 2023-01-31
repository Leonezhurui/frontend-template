<template>
  <div>{{ add(1, 23) }}</div>
</template>

<script lang="ts">
export default {
  name: "errorPage",
  setup() {
    let sub = (a:number, b:number):number => {
      return a+b;
    };
    let add = (a: number, b: number): number => {
      return a + b;
    };
    return {
      add,
      sub,
    };
  },
};
</script>

<style scoped></style>
