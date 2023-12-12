import { useDispatch, useApp } from '@reducer'
import { Svg } from './Svg'

export const ThemeSwitch = () => {
  const { theme } = useApp()
  const dispatch = useDispatch()
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
    const str = themeToken || (media.matches ? 'light' : 'dark')
    dispatch({
      type: 'change_theme', payload: {
        theme: str
      }
    })
  }

  const onThemeChange = () => {
    let str = theme === 'light' ? 'dark' : 'light'
    useCookie.set('theme', str)
    dispatch({
      type: 'change_theme', payload: {
        theme: str
      }
    })
  }

  return (
    <div className="theme-wrap">
      <Svg name={theme} onClick={onThemeChange} />
    </div>
  )
}