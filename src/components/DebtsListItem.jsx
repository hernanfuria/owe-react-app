export const DebtsListItem = ({giver, amount, receiver}) => {
    return (
        <>
            <span>{giver} owes {amount} to {receiver}</span>
            <br />
        </>
    )
}
