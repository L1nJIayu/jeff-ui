import { spawn } from 'child_process'
import { projectRoot } from './path'

// 给匿名任务函数包装名称
export const withTaskName  = (taskName: string, fn: () => Promise<any>) => Object.assign(fn, { displayName: taskName })

// 执行命令
export const run = (command: string) => {
  return new Promise((resolve, reject) => {
    const [cmd, ...params] = command.split(' ')
    const app = spawn(cmd, params, {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: true
    })
    app.on('close', resolve)
  })
}