<!-- <template>
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

</script> -->
<template>
  <button
    class="je-button"
    :class="className"
    :style="style">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { buttonProps } from './button'
defineOptions({
  name: 'JeButton'
})

const props = defineProps(buttonProps)

const style = computed(() => {
  return {}
})

const className = computed(() => {
  const cName = `je-button--${props.type}`
  return cName

})

</script>