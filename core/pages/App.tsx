import { Header, Content } from '@components/layout'
import { HomeNav } from '@components/home'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div className='app-wrap content'>
      <Header tool={<HomeNav />}>

      </Header>
      <Content>
        <Outlet />
      </Content>
    </div>
  )
}

export default App
