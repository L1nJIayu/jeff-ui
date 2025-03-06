import type { App } from 'vue'

// 按需引入
export * from './components/index'

import components from './components'

export const install = (app: App) => {

  components.forEach(component => app.component(component.name, component))
  
}

export default install