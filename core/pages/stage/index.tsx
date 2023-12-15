import { Header } from "@components/layout"
import { HeaderExtra, HeaderTool } from "@components/stage"
import { Outlet, useNavigate } from "react-router-dom"

const StageIndex = () => {
  const navigate = useNavigate()
  const token = useMemo(() => useCookie.get('token'), [])

  useEffect(() => {
    pagerHandle()
  }, [])

  // 是否已登录
  const pagerHandle = () => {
    if (!token) {
      navigate('/stage/login')
    } else {
      navigate('/stage/home')
    }
  }

  return (
    <div className="stage-wrap">
      <Header extra={<HeaderExtra />}>
        <HeaderTool />
      </Header>
      <Outlet />
    </div>
  )
}

export default StageIndex