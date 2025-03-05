
export const componentInstall = (components) => {
  components.install = (app) => {
    app.component(app.name, components)
  }
  return components
}