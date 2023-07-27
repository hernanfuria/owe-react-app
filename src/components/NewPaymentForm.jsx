import { useContext, useState } from "react"
import { GlobalContext } from "./context/GlobalContext"

export const NewPaymentForm = () => {
    const {names, payments, setPayments, paymentsIdsCounter, setPaymentsIdsCounter, navigate} = useContext(GlobalContext)

    const [payer, setPayer] = useState(names[0].name)
    const [amount, setAmount] = useState(0)
    const [consumers, setConsumers] = useState(names.map(person => {return person.name}))

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
        console.log(sortedConsumers)

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

    return (
        <form className="payment-input-form" onSubmit={handleSubmit}>
                <span className="form-title">New payment</span>
                <br />

                <label htmlFor="payer-name">Person who payed</label>
                <select name="payer-name" id="select-payer-name" onChange={handlePayerSelectChange}>
                    {
                        names.map(person => {
                            return (
                                <option value={person.name}>{person.name}</option>
                            )
                        })
                    }
                </select>

                <label htmlFor="amount-payed">Amount</label>
                <input type="number" name="amount-payed" onChange={handleAmountInputChange} />

                {
                    names.map(person => {
                        const check = consumers.includes(person.name)
                        return (
                            <>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        checked={check}
                                        id={person.name} 
                                        value={person.name} 
                                        onChange={handleConsumerCheckboxChange}
                                    /> 
                                    {person.name}
                                </label>
                                <br />
                            </>
                        )
                    })
                }

                <div className="form-submit">
                    <input type="submit" value="Add payment!" />
                </div>
            </form>
  )
}
