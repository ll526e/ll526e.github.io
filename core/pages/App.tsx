import { Header, Content, HomeNav } from '@components'
import { Outlet } from 'react-router-dom'
import { useApp } from '@reducer'
const App = () => {
  const { theme } = useApp()
  useMemo(() => {
    document.body.dataset.theme = theme
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
