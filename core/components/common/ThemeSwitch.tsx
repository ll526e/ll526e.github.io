import { useDispatch, useApp, type InstanceState } from '@reducer'
import { Svg } from './Svg'
export const ThemeSwitch = () => {
  const { theme } = useApp()
  const dispatch = useDispatch()
  const ThemeMap: InstanceState['theme'][] = ['light', 'dark', 'auto']
  const onThemeChange = (str: InstanceState['theme']) => {
    if (str === 'auto') {
      useCookie.remove('theme')
    } else {
      useCookie.set('theme', str)
    }
    dispatch({
      type: 'change_theme', payload: {
        theme: str
      }
    })
  }

  const renderClassName = (str: InstanceState['theme']) => {
    return str === theme ? 'theme-item active' : 'theme-item'
  }

  return (
    <div className="theme-wrap">
      {
        ThemeMap.map((item, index) => {
          return (
            <Svg key={index} name={item} className={renderClassName(item)} onClick={() => onThemeChange(item)} />
          )
        })
      }
    </div>
  )
}