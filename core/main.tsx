import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routers } from './routes/index'
import InstanceProvider from '@reducer'
import { FluentContext } from '@components/common';
import '@style'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InstanceProvider>
      <FluentContext >
        <Routers />
      </FluentContext>
    </InstanceProvider>
  </React.StrictMode>,
)
