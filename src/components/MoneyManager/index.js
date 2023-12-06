import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
    objs: [],
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
    objs: [],
  },
]

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: 'INCOME',
    transactionDetails: [],
  }

  removeData = id => {
    const {transactionDetails} = this.state
    const theObj = transactionDetails.find(each => each.id === id)
    const updatedDetails = transactionDetails.filter(each => each !== theObj)
    this.setState({transactionDetails: updatedDetails})

    if (theObj.theType === 'EXPENSES') {
      this.setState(prevState => ({
        balance: theObj.theAmount + prevState.balance,
        expenses: prevState.expenses - theObj.theAmount,
      }))
    }
    if (theObj.theType === 'INCOME') {
      this.setState(prevState => ({
        balance: prevState.balance - theObj.theAmount,
        income: prevState.income - theObj.theAmount,
      }))
    }
  }

  addData = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newData = {
      id: uuidv4(),
      theType: type,
      theTitle: title,
      theAmount: amount,
    }

    if (type === 'INCOME') {
      this.setState(prevState => ({
        income: parseInt(prevState.income) + amount,
        balance: parseInt(prevState.balance) + amount,
      }))
    }
    if (type === 'EXPENSES') {
      this.setState(prevState => ({
        expenses: parseInt(prevState.expenses) + amount,
        balance: parseInt(prevState.balance) - amount,
      }))
    }
    if (title !== '' && amount !== '' && type !== '') {
      this.setState(prevState => ({
        transactionDetails: [...prevState.transactionDetails, newData],
        title: '',
        amount: '',
        type: 'INCOME',
      }))
    }
  }

  addTitle = event => {
    this.setState({title: event.target.value})
  }

  addAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  addType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {balance, income, expenses, title, amount, transactionDetails} =
      this.state

    return (
      <div className="the-cont">
        <div className="upper">
          <h1 className="user">Hi Richard</h1>
          <p className="welcome-note">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>

        <MoneyDetails balance={balance} income={income} expenses={expenses} />

        <div className="lower-cards">
          <div className="form-elem">
            <form onSubmit={this.addData}>
              <h1 className="heading">Add Transaction</h1>

              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                value={title}
                className="bar"
                placeholder="TITLE"
                id="title"
                onChange={this.addTitle}
              />

              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="text"
                value={amount}
                className="bar"
                placeholder="AMOUNT"
                id="amount"
                onChange={this.addAmount}
              />

              <label htmlFor="options" className="label">
                TYPE
              </label>
              <select id="options" onChange={this.addType}>
                <option value="INCOME" selected>
                  Income
                </option>
                <option value="EXPENSES">Expenses</option>
              </select>

              <button type="submit" className="submit-btn">
                Add
              </button>
            </form>
          </div>

          <div className="history-elem">
            <h1 className="heading">History</h1>
            <div className="data-elem">
              <div className="titles-cont">
                <div className="titles">
                  <p className="title">Title</p>
                  <p className="title">Amount</p>
                  <p className="title">Type</p>
                </div>
                <p></p>
              </div>
              <ul className="lists">
                {transactionDetails.map(each => (
                  <TransactionItem
                    details={each}
                    key={each.id}
                    removeData={this.removeData}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
