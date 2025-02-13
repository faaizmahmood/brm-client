import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/App.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import "react-pro-sidebar/dist/css/styles.css";
import "react-calendar/dist/Calendar.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GoogleOAuthProvider clientId="633011311231-s6ekboigrrl38v7rsaehiuns6itetsnp.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
