import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.scss'
import { Resume } from './components/CV/CV';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
<Resume />
   </StrictMode>,
)
