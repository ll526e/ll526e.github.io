import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routers } from './routes/index'
import InstanceProvider from '@reducer'
import { ConfigProvider, App } from 'antd'
import { antdTheme } from '@style'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InstanceProvider>
      <ConfigProvider theme={antdTheme}>
        <App component={false}>
          <Routers />
        </App>
      </ConfigProvider>
    </InstanceProvider>
  </React.StrictMode>,
)
