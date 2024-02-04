import { Header } from "@components/layout"
import { HeaderExtra, HeaderTool } from "@components/stage"
import { Outlet, useNavigate, useLocation } from "react-router-dom"

const StageIndex = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const token = useCookie.get('token')

  // 是否已登录
  const pagerHandle = useCallback(() => {
    if (!token) {
      navigate('/stage/login')
    } else {
      navigate('/stage/home')
    }
  }, [navigate, token])

  useEffect(() => {
    pagerHandle()
  }, [pagerHandle])

  // header extra and tool
  const headerExtra = useMemo(() => {
    if (location.pathname === '/stage/login') {
      return {}
    }
    return {
      extra: <HeaderExtra />,
      tool: <HeaderTool />
    }
  }, [location])

  return (
    <div className="stage-wrap content">
      <Header {...headerExtra} />
      <Outlet />
    </div>
  )
}

export default StageIndex