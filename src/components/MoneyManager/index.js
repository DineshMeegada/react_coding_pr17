// Write your code here
import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: '',
    amountMoney: '',
    type: 'Income',
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountMoney: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {title, amountMoney, type} = this.state
    console.log(title, amountMoney, type)
    const newTransaction = {
      id: v4(),
      title,
      amount: amountMoney,
      type,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amountMoney: '',
      type: 'Income',
    }))
  }

  render() {
    const {title, amountMoney, transactionsList} = this.state

    let balance = 0
    let income = 0
    let expenses = 0
    for (let i = 0; i < transactionsList.length; i + 1) {
      const transaction = transactionsList[i]
      const {amount, type} = transaction

      if (type === 'Income') {
        balance += amount
        income += amount
      } else {
        balance -= amount
        expenses += amount
      }
    }

    return (
      <div className="full-page-container">
        <div className="money-manager-container">
          <div className="profile-container">
            <div>
              <h1 className="profile-name">Hi, Richard</h1>
              <p className="description">
                Welcome back to your
                <span className="description-span">Money Manager</span>
              </p>
            </div>
          </div>
          <div className="money-details-container">
            <MoneyDetails
              imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              altName="balance"
              name="Balance"
              money={balance}
            />
            <MoneyDetails
              imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              altName="income"
              name="Income"
              money={income}
            />
            <MoneyDetails
              imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              altName="expenses"
              name="Expenses"
              money={expenses}
            />
          </div>
          <div className="bottom-container">
            <form
              className="transactions-form-container"
              onSubmit={this.onAddTransaction}
            >
              <h1 className="head">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                placeholder="TITLE"
                value={title}
                className="input"
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                id="amount"
                type="text"
                placeholder="AMOUNT"
                value={amountMoney}
                className="input"
                onChange={this.onChangeAmount}
              />
              <label htmlFor="type" className="label">
                TYPE
              </label>
              <select id="type" name="type" onChange={this.onChangeType}>
                {transactionTypeOptions.map(eachOption => (
                  <option value={eachOption.displayText}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <div className="transactions-history-container">
              <h1 className="head">History</h1>
              <ul className="history-list-container">
                <li className="history-head">
                  <h1 className="list-head">Title</h1>
                  <h1 className="list-head">Amount</h1>
                  <h1 className="list-head">Type</h1>
                  <h1> </h1>
                </li>
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
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
