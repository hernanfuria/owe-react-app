export const TotalPayedListItem = ({payer, amount}) => {
    return (
        <div className="total-payed-list-item">
            <span>{payer}</span><span className="payments-fill"> payed in total </span><span>{amount}</span>
            <br />
        </div>
    )
}
