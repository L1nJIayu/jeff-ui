
// export type ButtonProps = {
//   type?: string
//   size?: string
//   color?: string
// }



// 组件可选类型
export const buttonTypes = [
  '',
  'default',
  'primary',
  'success',
  'warning',
  'danger',
  'info',
] as const

export const buttonProps = {
  type: {
    type: String,
    values: buttonTypes,
    default: ''
  }
}