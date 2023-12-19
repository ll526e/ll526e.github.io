// import { useNavigate } from "react-router-dom"
import type { BaseSyntheticEvent } from 'react'
import { Field, Input, Button } from "@fluentui/react-components";

interface LoginFormData {
  username: string
  password: string
  agree: boolean
}

const Login = () => {
  // const navigate = useNavigate()
  const [formState, setFormState] = useState({} as LoginFormData)
  const [loading, setLoading] = useState(false)
  const setCookie = () => {
    if (!formState.username || !formState.password) {

      return
    }
    setLoading(true)

  }
  const onChange = (e: BaseSyntheticEvent) => {
    const { value, checked, name } = e.target
    setFormState({
      ...formState,
      [name]: value || checked
    })
  }


  return (
    <div className="login-wrap">
      <div className="title">Welcome Stage</div>
      <div className="sub-title">
        We're so excited to see you!
      </div>

      <Field label="账号" className="form-item">
        <Input name="username" disabled={loading} onChange={onChange} />
      </Field>
      <Field label="密码" className="form-item">
        <Input name="password" disabled={loading} onChange={onChange} />
      </Field>
      <Field label="" className="form-item">
        <Button className="form-submit" disabled={loading} appearance="primary" onClick={setCookie}>Next</Button>
      </Field>
    </div >
  )
}
export default Login