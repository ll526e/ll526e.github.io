import { useRouteError } from "react-router-dom";
import { Header } from "@components/layout";
import {
  Button,
  Text,
  Card,
  CardFooter,
  CardHeader,
} from "@fluentui/react-components";
import { Svg } from "@components/common";
import { useNavigate } from "react-router-dom";
interface ErrorResponse {
  data: string
  error: {
    message: string
    stack: string
  }
  status: number
  statusText: string
}

interface HeaderTextProps {
  error: ErrorResponse
}

const HeaderText = (props: HeaderTextProps) => {
  const { error } = props;
  return (
    <Text >
      <span>{error.status}: {error.statusText}</span>
    </Text>
  )
}

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError() as ErrorResponse;
  const onBack = () => {
    navigate('/')
  }
  return (
    <div className="error-bundle">
      <Header></Header>
      <div className="error-bundle_inner">
        <Card>
          <CardHeader
            image={<Svg name="error" size={36} />}
            header={<Text>糟糕，出问题了～</Text>}
            description={<HeaderText error={error} />}
          />

          <Text size={400}>
            {error.data}
          </Text>

          <CardFooter>
            <Button size="small" onClick={onBack}>返回首页</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
export default Error