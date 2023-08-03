import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './context/GlobalContext'
import { PaymentsListItem } from './PaymentsListItem'

export const PaymentsList = () => {
    const {payments, setPayments, setNamesDefined, navigate} = useContext(GlobalContext)

    const [canSubmit, setCanSubmit] = useState(false)

    useEffect(() => {
        let submitEnabled = true
        submitEnabled = submitEnabled && (payments.length > 0)
        setCanSubmit(submitEnabled)
    }, [payments])

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

    const seeBalance = () => {
        navigate('/balance')
    }

    return (
        <div className='payments-list'>
            <span className='payments-list-title'>Payments done</span>

            {
                payments.map(payment => {
                    return (
                        <PaymentsListItem payment={payment} removePayment={removePayment} />
                    )
                })
            }

            <div className="form-control">
                <button className='button-back-to-names' onClick={backToNames}>Back to names</button>
                <button className='button-add new' onClick={newPayment}>+</button>
                <button 
                    className='form-submit next' 
                    disabled={canSubmit ? false : true}
                    onClick={seeBalance}
                >
                    Balance
                </button>
            </div>


        </div>
    )
}
