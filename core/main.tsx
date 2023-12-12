import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react';
import { Routers } from './routes/index'
import InstanceProvider from '@reducer'
import { MuiTheme } from '@style'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={MuiTheme}>
      <InstanceProvider>
        <Routers />
      </InstanceProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
