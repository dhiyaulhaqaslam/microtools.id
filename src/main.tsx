import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './enhancements.css'
import './templates.css'
import './premium-business.css'
import './action-system.css'
import './item-actions.css'
import App from './App'

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
