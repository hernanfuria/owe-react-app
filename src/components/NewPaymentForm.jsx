import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "./context/GlobalContext"

export const NewPaymentForm = () => {
    const {names, payments, setPayments, paymentsIdsCounter, setPaymentsIdsCounter, navigate} = useContext(GlobalContext)

    const [payer, setPayer] = useState(names[0].name)
    const [amount, setAmount] = useState(0)
    const [consumers, setConsumers] = useState(names.map(person => {return person.name}))


    const [canSubmit, setCanSubmit] = useState(false)

    useEffect(() => {
        let submitEnabled = true
        submitEnabled = submitEnabled && (amount > 0)
        submitEnabled = submitEnabled && (consumers.length > 0)

        setCanSubmit(submitEnabled)

    }, [amount, consumers])

    const handlePayerSelectChange = ({target}) => {
        setPayer(target.value)
    }

    const handleAmountInputChange = ({target}) => {
        setAmount(target.value)
    }

    const handleConsumerCheckboxChange = ({target}) => {
        const changedConsumer = target.value
        const isChecked = target.checked

        let newConsumers = []
        if (isChecked) {
            newConsumers.push(changedConsumer)
        }

        for (const consumer of consumers) {
            if (consumer != changedConsumer && consumers.includes(consumer)) {
                newConsumers.push(consumer)
            }
        }
        setConsumers(newConsumers)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let sortedConsumers = []
        for (const person of names) {
            if (consumers.includes(person.name)) {
                sortedConsumers.push(person.name)
            }
        }

        setPayments(
            [
                ...payments,
                {
                    payer: payer,
                    amount: amount,
                    consumers: sortedConsumers,
                    id: paymentsIdsCounter
                }
            ]
        )
        setPaymentsIdsCounter(paymentsIdsCounter + 1)
        navigate('/paymentslist')
    }

    const cancelNewPayment = () => {
        navigate('/paymentslist')
    }

    return (
        <form className="payment-input-form" onSubmit={handleSubmit}>
            <span className="form-title">New payment</span>
            <br />

            <div className="payer-selector">
                <label className="form-label" htmlFor="payer-name">Person who payed</label>
                <select className="form-select" name="payer-name" id="select-payer-name" onChange={handlePayerSelectChange}>
                    {
                        names.map(person => {
                            return (
                                <option value={person.name}>{person.name}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className="payed-amount">
                <label className="form-label" htmlFor="amount-payed">Amount</label>
                <input className="form-input rightest" type="number" name="amount-payed" onChange={handleAmountInputChange} />
            </div>

            <div className="consumers-checkboxes">
                <span className="payments-fill">Consumers</span>
                {
                    names.map(person => {
                        const check = consumers.includes(person.name)
                        return (
                            <div className="checkbox-wrapper-47">
                                <input 
                                    type="checkbox" 
                                    checked={check}
                                    id={person.name} 
                                    value={person.name} 
                                    onChange={handleConsumerCheckboxChange}
                                /> 
                                <label htmlFor={person.name}>
                                    {person.name}
                                </label>
                                <br />
                            </div>
                        )
                    })
                }
            </div>

            <div className="form-control">
                <button className="cancel-payment" onClick={cancelNewPayment}>Cancel payment</button>
                <input 
                    className="form-submit next" 
                    type="submit" 
                    disabled={canSubmit ? false : true}
                    value="Add payment" 
                />
            </div>

        </form>
  )
}
