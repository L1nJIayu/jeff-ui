<template>
  <button :style="buttonStyle">
    <slot></slot>
  </button>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import type { ButtonProps } from './button'

defineOptions({
  name: 'JeButton'
})

const props = defineProps<ButtonProps>()

const buttonStyle = computed(() => {
  return {
    ...(props.color ? { 'color': props.color } : {})
  }
})

</script>