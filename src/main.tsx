import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ToastContextProvider } from './hooks/useToasts.tsx'
import 'react-perfect-scrollbar/dist/css/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContextProvider>
      <App />
    </ToastContextProvider>
  </StrictMode>,
)
