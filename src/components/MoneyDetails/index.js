// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="money-details">
      <div className="balance-card">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="text-cont">
          <p className="balance-tag">Your Balance</p>
          <p className="balance" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="card">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="text-cont">
          <p className="tag">Your Income</p>
          <p className="rupees" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="card">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="text-cont">
          <p className="tag">Your Expenses</p>
          <p className="rupees" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
