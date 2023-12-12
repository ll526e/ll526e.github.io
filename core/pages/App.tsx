import { Header, Content, HomeNav } from '@components'
import { Outlet } from 'react-router-dom'
import { useApp } from '@reducer'
const App = () => {
  const { theme } = useApp()
  useMemo(() => {
    const el = document.querySelector('html')
    el?.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <>
      <Header>
        <HomeNav />
      </Header>
      <Content>
        <Outlet />
      </Content>
    </>
  )
}

export default App
