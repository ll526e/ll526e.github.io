import { Header, Content, } from '@components/layout'
import { HomeNav } from '@components/home'
import { Outlet } from 'react-router-dom'
const App = () => {
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
