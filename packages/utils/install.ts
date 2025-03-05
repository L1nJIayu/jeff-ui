
// export const componentInstall = (components) => {
//   components.install = (app) => {
//     app.component(app.name, components)
//   }
//   return components
// }
import { App, Plugin } from "vue";

export const componentInstall = <T extends Record<string, any>>(components: T & Plugin) => {
  components.install = (app: App) => {
    for (const key in components) {
      if (components[key] && components[key].name) {
        app.component(components[key].name, components[key]);
      }
    }
  };
  return components;
};
