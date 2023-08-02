import React from 'react'

export const PaymentsListItem = ({payment, removePayment}) => {
    return (
        <div className='payments-list-item'>
            <div className='payments-list-item-header'>
                <span className='payments-payer'>{payment.payer}</span>
                <span className='payments-fill'> payed </span>
                <span className='payments-amount'>{payment.amount}</span>
            </div>

            <div className="payments-list-item-consumers">
                <span className="payments-fill">Consumers: </span>
                {payment.consumers.map(consumer => {
                    return (
                        <span className='payments-consumer'>{consumer} </span>
                    )
                })}
            </div>

            <button className='payments-remove' onClick={() => removePayment(payment.id)}>X</button>
        </div>
    )
}
