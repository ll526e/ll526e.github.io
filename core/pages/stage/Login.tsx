import { useNavigate } from "react-router-dom"
import type { BaseSyntheticEvent } from 'react'
import { Form, Button, Input } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface LoginFormData {
  username: string
  password: string
  agree: boolean
}

const Login = () => {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({} as LoginFormData)
  const { message } = useMessage()
  const [loading, setLoading] = useState(false)
  const setCookie = () => {
    if (!formState.username || !formState.password) {
      message.warning({
        content: '请输入账号密码',
        type: 'warning'
      })
      return
    }
    setLoading(true)
    message.open({
      type: 'loading',
      content: '正在登录..',
      duration: 2.5,
    }).then(() => {
      setLoading(false)
      message.open({
        content: '登录成功',
        type: 'success',
        duration: 1.5,
        onClose() {
          useCookie.set('token', '1', {
            onsuccess() {
              navigate('/stage/home')
            },
          })
        },
      })
    })
  }
  const onChange = (e: BaseSyntheticEvent | CheckboxChangeEvent) => {
    const { value, checked, name } = e.target
    setFormState({
      ...formState,
      [name]: value || checked
    })
  }

  return (
    <Form className="login-wrap" labelCol={{ span: 4 }} disabled={loading}>
      <div className="title">Welcome Stage</div>
      <div className="sub-title">
        We're so excited to see you!
      </div>
      <Form.Item label="账号" className="form-item">
        <Input name="username" onChange={onChange} />
      </Form.Item>
      <Form.Item label="密码" className="form-item">
        <Input name="password" onChange={onChange} />
      </Form.Item>
      <Form.Item className="form-item" wrapperCol={{ offset: 4 }}>
        <Button style={{ width: '60%' }} type="primary" onClick={setCookie}>Next</Button>
      </Form.Item>
    </Form >
  )
}
export default Login