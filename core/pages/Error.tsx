import { useRouteError } from "react-router-dom";
import { Header } from "@components/layout";
interface ErrorResponse {
  data: string
  error: {
    message: string
    stack: string
  }
  status: number
  statusText: string
}

const Error = () => {
  const error = useRouteError() as ErrorResponse;
  return (
    <div className="error-bundle">
      <Header></Header>
      <p>{error.error.stack}</p>
    </div>
  )
}
export default Error