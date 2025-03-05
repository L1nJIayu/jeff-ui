// 按需引入
export * from './components/index'

import components from './components'

export const install = (app) => {
  if(install.installed) return

  components.forEach(component => app.component(component.name, component))
  
}

export default install