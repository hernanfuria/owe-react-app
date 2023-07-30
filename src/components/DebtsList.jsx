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
        <>
            <h1>Debts</h1>
            {
                listOfDebts.map(debt => {
                    return (
                        <DebtsListItem giver={debt.giver} amount={debt.amount} receiver={debt.receiver} key={debt.giver} />
                    )
                })
            }
        </>
    )
}
