import { NavLink } from "react-router-dom"
export const HomeNav = () => {
  const navList = [
    {
      name: '文档中心',
      path: '/docs'
    },
    {
      name: '管理后台',
      path: '/stage'
    },
    {
      name: '联系我们',
      path: '/contact'
    },
  ]
  return (
    <nav className="home-nav">
      {
        navList.map((item, index) => {
          return (
            <NavLink className="home-nav__item" key={index} to={item.path}>{item.name}</NavLink>
          )
        })
      }
    </nav>
  )
}