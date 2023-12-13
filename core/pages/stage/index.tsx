import { Header } from "@components"
import { Outlet, useNavigate } from "react-router-dom"
import type { SyntheticEvent } from 'react'

const StageIndex = () => {
  const navigate = useNavigate()
  const token = useMemo(() => useCookie.get('token'), [])

  useEffect(() => {
    init()
  }, [])

  // 初始化判断是否已登录
  const init = () => {
    if (!token) navigate('/stage/login')
  }

  // 返回主页
  const onLinkHome = (e: SyntheticEvent) => {
    e.preventDefault()
    if (token) navigate('/stage')
  }

  return (
    <div className="stage-wrap">
      <Header title={<em onClick={onLinkHome}>&nbsp;-&nbsp;stage</em>}></Header>
      <Outlet />
    </div>
  )
}

export default StageIndex