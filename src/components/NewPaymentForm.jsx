import { useContext, useState } from "react"
import { GlobalContext } from "./context/GlobalContext"

export const NewPaymentForm = () => {
    const {names, payments, setPayments, paymentsIdsCounter, setPaymentsIdsCounter, navigate} = useContext(GlobalContext)

    const [payer, setPayer] = useState(names[0].name)
    const [amount, setAmount] = useState(0)
    const [consumers, setConsumers] = useState(names.map(person => {return person.name}))

    const handlePayerSelectChange = ({target}) => {
        setPayer(target.value)
        // console.log(payer)
    }

    const handleAmountInputChange = ({target}) => {
        setAmount(target.value)
        // console.log(amount)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setPayments(
            [
                ...payments,
                {
                    payer: payer,
                    amount: amount,
                    consumers: consumers,
                    id: paymentsIdsCounter
                }
            ]
        )
        setPaymentsIdsCounter(paymentsIdsCounter + 1)
        navigate('/paymentslist')
    }


    const placeHolder = () => {

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
                        return (
                            <span>{person.name}</span>
                        )
                    })
                }

                <div className="form-submit">
                    <input type="submit" value="Add payment!" />
                </div>
            </form>
  )
}
