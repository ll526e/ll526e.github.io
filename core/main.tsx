import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routers } from './routes/index'
import '@style'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
)
