// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, removeData} = props
  const {id, theType, theTitle, theAmount} = details
  const isTrue = theType === 'INCOME'
  const displayText = isTrue ? 'Income' : 'Expenses'

  const onClicked = () => {
    removeData(id)
  }
  return (
    <li className="the-list">
      <div className="lists">
        <p className="list">{theTitle}</p>
        <p className="list">{theAmount}</p>
        <p className="list">{displayText}</p>
      </div>
      <button className="delete-btn" data-testid="delete" onClick={onClicked}>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
