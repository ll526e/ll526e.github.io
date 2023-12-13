import { Header, Content, HomeNav } from '@components'
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
