import './root/normalize.scss'
import './root/app.scss'
import './iconfont/iconfont.js'
export * from './ui-theme'

export const autoStyleImport = () => {
  const modules = import.meta.glob('./modules/**/*[.css | .scss]')
  for (const path in modules) {
    modules[path]()
  }
}