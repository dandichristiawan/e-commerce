import App from './App'
import './index.css'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './auth'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)
