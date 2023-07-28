import { useContext } from "react"
import { GlobalContext } from "./context/GlobalContext"

export const Balance = () => {
    const {payments, navigate} = useContext(GlobalContext)

    return (
        <div>Balance</div>
    )
}
