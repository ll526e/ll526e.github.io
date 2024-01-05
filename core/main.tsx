import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routers } from './routes/index'
import InstanceProvider from '@reducer'
import { FluentContext } from '@components/common';
import '@style'
import 'virtual:uno.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InstanceProvider>
      <FluentContext >
        <Routers />
      </FluentContext>
    </InstanceProvider>
  </React.StrictMode>,
)
