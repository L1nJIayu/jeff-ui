/// <reference types="vite/client" />

declare module '*.vue' {
  import type { defineComponent, DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  return component
}

// declare module '@vue/runtime-core' {
//   export interface App {
//     [INSTALLED_KEY]?: boolean
//   }

//   export interface GlobalComponents {
//     Component: (props: { is: Component | string }) => void
//   }

//   export interface ComponentCustomProperties {
//     vShow: typeof vShow
//   }
// }