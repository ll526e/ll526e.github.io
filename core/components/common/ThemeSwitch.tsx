import { useDispatch, useApp, type InstanceState } from '@reducer'
import { Svg } from './Svg'

export const ThemeSwitch = () => {
  const { theme } = useApp()
  const dispatch = useDispatch()
  const ThemeMap: InstanceState['theme'][] = ['light', 'dark', 'auto']
  const themeToken = useCookie.get<'light' | 'dark'>('theme')
  const themeMedia = window.matchMedia("(prefers-color-scheme: light)")

  useEffect(() => {
    regTheme(themeMedia);
    themeMedia.addEventListener('change', regTheme);
    return () => {
      themeMedia.removeEventListener('change', () => { });
    }
  }, []);

  const regTheme = (media: MediaQueryListEventInit) => {
    const str = themeToken || media.matches ? 'light' : 'dark'
    dispatch({
      type: 'change_theme', payload: {
        theme: str
      }
    })
  }

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
    return useClassnames({
      'theme-item': true,
      'active': str === theme
    })
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