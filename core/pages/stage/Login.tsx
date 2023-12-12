import { useNavigate } from "react-router-dom"
import { BaseSyntheticEvent } from 'react'
import { Input } from '@mui/material'
interface LoginFormData {
  username: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({} as LoginFormData)
  const setCookie = () => {
    if (!formState.username || !formState.password) {
      alert('请输入账号密码')
      return
    }
    const pass = confirm(`您的帐号是${formState.username}，密码是${formState.password}，确认进入系统吗`)
    if (pass) {
      alert('登录成功')
      useCookie.set('token', '1', {
        onsuccess() {
          navigate('/stage')
        },
      })
    } else {
      alert('已取消')
    }
  }
  const onInput = (e: BaseSyntheticEvent) => {
    const { value, name } = e.target
    setFormState({
      ...formState,
      [name]: value
    })
  }
  return (
    <div className="stage-form">
      <div className="stage-form-item">
        <label>
          <span>账号</span>
        </label>
        <Input autoComplete="off" name="username" onInput={onInput} />
      </div>
      <div className="stage-form-item">
        <label>
          <span>密码</span>
        </label>
        <Input autoComplete="off" name="password" onInput={onInput} />
      </div>
      <div className="stage-form-item">
        <button type="button" onClick={setCookie}>Entry Stage</button>
      </div>
    </div>
  )
}
export default Login