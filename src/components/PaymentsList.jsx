import React, { useContext, useState } from 'react'
import { GlobalContext } from './context/GlobalContext'
import { PaymentsListItem } from './PaymentsListItem'

export const PaymentsList = () => {
    const {payments, setPayments, setNamesDefined, navigate} = useContext(GlobalContext)

    

    const backToNames = () => {
        setNamesDefined(false)
        navigate('/')
    }

    const newPayment = () => {
        navigate('/newpayment')
    }

    const removePayment = (paymentId) => {
        setPayments(payments.filter(payment => payment.id != paymentId))
    }

    return (
        <>
            <h1>Payments done</h1>
            <hr />

            {
                payments.map(payment => {
                    return (
                        <PaymentsListItem payment={payment} removePayment={removePayment} />
                    )
                })
            }

            <button onClick={backToNames}>Back to names</button>
            <button onClick={newPayment}>New payment</button>


        </>
    )
}
