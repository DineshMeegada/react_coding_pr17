// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  const {title, amount, type} = transactionDetails

  return (
    <li className="history-item">
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{amount}</p>
      </div>
      <div>
        <p>{type}</p>
      </div>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
