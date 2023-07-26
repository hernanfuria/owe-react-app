// import { Routes, Route, Navigate } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalProvider"

export const OweApp = () => {
    return (
        <GlobalProvider>
            <h1>MainApp</h1>
            <hr />
            
            {/*
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/*" element={ <Navigate to='/' /> } />
            </Routes>
            */}
        </GlobalProvider>
  )
}
