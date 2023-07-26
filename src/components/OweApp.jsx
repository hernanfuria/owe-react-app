import { Routes, Route, Navigate } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalProvider"

export const OweApp = () => {
    return (
        <GlobalProvider>
            <h1>MainApp</h1>
            <hr />
            
            
            <Routes>
                <Route path="/" element={ <NamesForm /> } />
                {/*
                <Route path="/paymentslist" element={ <PaymentsList /> } />
                <Route path="/newpayment" element={ <NewPaymentForm /> } />
                <Route path="/balance" element={ <Balance /> } />
                */}
                <Route path="/*" element={ <Navigate to='/' /> } />
            </Routes>
            
        </GlobalProvider>
  )
}
