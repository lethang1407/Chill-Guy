import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/Store/index.jsx';
import './global.css'
import './style/index.css'

import App from './Pages/App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>,
)
