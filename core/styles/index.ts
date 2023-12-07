import './root/normalize.css'
import './root/root.scss'
const autoImport = async () => {
  const modules = import.meta.glob('./modules/**/*[.css | .scss]')
  for (const path in modules) {
    modules[path]()
  }
}
autoImport()