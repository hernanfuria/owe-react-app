export const DebtsListItem = ({giver, amount, receiver}) => {
    return (
        <div className="debts-list-item">
            
            <span>{giver}</span>
            <span className="payments-fill"> owes </span>
            <span>{amount.toFixed(2)}</span>
            <span className="payments-fill"> to </span>
            <span>{receiver}</span>
            <br />
        </div>
    )
}
