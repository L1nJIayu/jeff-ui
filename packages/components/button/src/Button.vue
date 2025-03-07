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
  <div>
    <button :style="style">
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { buttonProps } from './button'
defineOptions({
  name: 'JeButton'
})

const props = defineProps(buttonProps)

const style = computed(() => {
  return {
    ...(
      props.type ? props.type === 'primary'
        ? { 'background-color': '#409eff'}
        : props.type === 'success'
        ? { 'background-color': '#67c23a'}
        : props.type === 'warning'
        ? { 'background-color': '#e6a23c'}
        : props.type === 'info'
        ? { 'background-color': '#909399'}
        : props.type === 'danger'
        ? { 'background-color': '#f56c6c'}
        : {}
      : {}
    )
  }
})

</script>