import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalContext'

export const PaymentsList = () => {
    const {payments, setNamesDefined, navigate} = useContext(GlobalContext)

    const backToNames = () => {
        setNamesDefined(false)
        navigate('/')
    }

    const newPayment = () => {
        navigate('/newpayment')
    }

    return (
        <>
            <h1>Payments done</h1>
            <hr />

            {
                payments.map(payment => {
                    return (
                        <div>
                            <h2>{payment.payer} - {payment.amount}</h2>
                            {payment.consumers.map(consumer => {
                                return (
                                    <span>{consumer} </span>
                                )
                            })}
                        </div>
                    )
                })
            }

            <button onClick={backToNames}>Back to names</button>
            <button onClick={newPayment}>New payment</button>


        </>
    )
}
