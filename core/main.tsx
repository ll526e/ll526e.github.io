import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routers } from './routes/index'
import InstanceProvider from '@reducer'
import { FluentContent } from '@components/common';
import '@style'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InstanceProvider>
      <FluentContent >
        <Routers />
      </FluentContent>
    </InstanceProvider>
  </React.StrictMode>,
)
