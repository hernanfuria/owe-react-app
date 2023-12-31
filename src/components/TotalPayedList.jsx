import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "./context/GlobalContext"
import { TotalPayedListItem } from "./TotalPayedListItem"

export const TotalPayedList = () => {
    const {names, payments, navigate} = useContext(GlobalContext)

    const [totalPayed, setTotalPayed] = useState([])

    useEffect(() => {
        let payed = []
        for (const person of names) {
            payed.push({
                name: person.name,
                amount: 0
            })
        }
        for (const payment of payments) {
            for (let p of payed) {
                if (p.name == payment.payer) {
                    p.amount = parseInt(p.amount) + parseInt(payment.amount)
                }
            }
        }
        setTotalPayed([ ...payed ])
    }, [])
    

    return (
        <div className="total-payed-list">
            <span className="form-title">Total Spendings</span>
            <br /><br />
            {
                totalPayed.map(payed => {
                    return (
                        <TotalPayedListItem payer={payed.name} amount={payed.amount} key={payed.payer} />
                    )
                })
            }
        </div>
    )
}
