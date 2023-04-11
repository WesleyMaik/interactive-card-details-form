import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'

import { Providers } from '@/components/Providers';

import "@/style/global.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
