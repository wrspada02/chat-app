import ReactDOM from 'react-dom/client'
import { App } from './App'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter basename='/chat-app'>
    <App />
  </HashRouter>
)
