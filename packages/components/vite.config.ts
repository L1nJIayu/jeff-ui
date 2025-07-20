// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


export default defineConfig(() => {
  const format = (process.env.BUILD_FORMAT || 'es') as 'es' | 'cjs'
  const outDir = format === 'es' ? 'dist/es' : 'dist/lib'

  return {
    plugins: [vue()],
    build: {
      outDir,
      lib: {
        entry: path.resolve(__dirname, 'index.ts'),
        name: 'JeffUiComponents',
        fileName: (fmt) => `components.${fmt}.js`,
        formats: [format], // ✅ 需要断言类型
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
          preserveModules: true,
          preserveModulesRoot: '.',
          entryFileNames: '[name].js',
        },
      },
    },
  }
})

