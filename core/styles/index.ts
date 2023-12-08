import './root/normalize.scss'
import './root/app.scss'
const autoImport = async () => {
  const modules = import.meta.glob('./modules/**/*[.css | .scss]')
  for (const path in modules) {
    modules[path]()
  }
}
autoImport()