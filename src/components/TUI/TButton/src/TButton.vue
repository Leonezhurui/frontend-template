<template>
  <button :class="[$style.container, $style[`type-${props.type}`], $style[`size-${props.size}`]]"
          :disabled="props.disabled"
          @click="$emit('tClick')"
  >
    <slot></slot>
  </button>

</template>

<script lang="ts">
// 使用两个script来设置组件的名称
export default defineComponent({
  name: "SButton",
});
</script>
<script setup lang="ts">
const props = withDefaults(
    defineProps<{
      type?: ("normal" | "primary"),
      size?: ("small" | "normal" | "large"),
      disabled?: (true | false)
    }>(),
    {
      type:  "normal",
      size: "normal",
      disabled: false,
    }
);

</script>

<style lang="scss" module>
@import "TButton";
</style>
