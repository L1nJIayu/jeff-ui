import { series } from "gulp"
import { withTaskName } from "../../build/utils"

export default series(
  withTaskName("build:components", async () => {
    console.log('打包组件')
  })
)