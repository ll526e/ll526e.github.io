import './root/normalize.scss'
import './root/app.scss'
import './iconfont/iconfont.js'
export * from './mui-theme'

const autoImport = async () => {
  const modules = import.meta.glob('./modules/**/*[.css | .scss]')
  for (const path in modules) {
    modules[path]()
  }
}
autoImport()