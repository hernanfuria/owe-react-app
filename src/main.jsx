import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { OweApp } from './components/OweApp.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <OweApp />
        </React.StrictMode>,
    </BrowserRouter>
)
