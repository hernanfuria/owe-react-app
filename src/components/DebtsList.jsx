import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { DebtMatrix } from "../resources/DebtMatrix";
import { DebtsListItem } from "./DebtsListItem";

export const DebtsList = () => {
    const {names, payments} = useContext(GlobalContext)

    const [listOfDebts, setListOfDebts] = useState([])

    useEffect(() => {
        let debtMatrix = new DebtMatrix(names.map(person => {return person.name}));
        for (const payment of payments) {
            debtMatrix.addPayment(payment)
        }

        setListOfDebts(debtMatrix.resolve())
    }, [])

    return (
        <div className="debts-list">
            <span className="form-title">Debts</span>
            <br /> <br />
            {
                listOfDebts.map(debt => {
                    return (
                        <DebtsListItem giver={debt.giver} amount={debt.amount} receiver={debt.receiver} key={debt.giver} />
                    )
                })
            }
        </div>
    )
}
