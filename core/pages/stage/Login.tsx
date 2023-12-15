import { useNavigate } from "react-router-dom"
import { BaseSyntheticEvent } from 'react'
import { Form, Button, Checkbox, Input, } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface LoginFormData {
  username: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({} as LoginFormData)
  const { message, modal } = useMessage()

  const setCookie = () => {
    if (!formState.username || !formState.password) {
      message.warning({
        content: '请输入账号密码',
        type: 'warning'
      })
      return
    }
    modal.confirm({
      content: `您的帐号是${formState.username}，密码是${formState.password}，确认进入系统吗？`,
      onOk() {
        message.open({
          type: 'loading',
          content: '正在登录..',
          duration: 2.5,
        }).then(() => {
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
      },
      onCancel() {
        message.open({
          content: '已取消',
          type: 'info'
        })
      }
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
    <Form className="login-wrap">
      <Form.Item label="账号" className="stage-form-item">
        <Input name="username" onChange={onChange} />
      </Form.Item>
      <Form.Item label="密码" className="stage-form-item">
        <Input name="password" onChange={onChange} />
      </Form.Item>
      <Form.Item className="stage-form-item">
        <Checkbox name="agree" onChange={onChange}>我已阅读协议</Checkbox>
        <Button type="primary" onClick={setCookie}>Next</Button>
      </Form.Item>
    </Form>
  )
}
export default Login