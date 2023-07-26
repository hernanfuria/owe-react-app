import React from 'react'

export const PaymentsListItem = ({payment, removePayment}) => {
    return (
        <div>
            <h2>{payment.payer} - {payment.amount}</h2>
            {payment.consumers.map(consumer => {
                return (
                    <span>{consumer} </span>
                )
            })}
            <button onClick={() => removePayment(payment.id)}>remove</button>
        </div>
    )
}
