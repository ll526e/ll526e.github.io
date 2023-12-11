export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>()
  const themeToken = useCookie.get<'light' | 'dark'>('theme')
  const themeMedia = window.matchMedia("(prefers-color-scheme: light)")
  // This function is called when the user changes the theme or when the user's system init.
  const regTheme = (media: MediaQueryListEventInit) => {
    const str = themeToken || media.matches ? 'light' : 'dark'
    setTheme(str)
  }

  useEffect(() => {
    regTheme(themeMedia);
    themeMedia.addEventListener('change', regTheme);
    return () => {
      themeMedia.removeEventListener('change', () => { });
    }
  }, []);

  return [
    theme,
    setTheme
  ]
}