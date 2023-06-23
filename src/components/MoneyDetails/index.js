// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {imgUrl, altName, name, money} = props

  return (
    <div className="money-container">
      <div className="image-container">
        <img src={imgUrl} alt={altName} className="details-image" />
      </div>
      <div className="details-container">
        <p className="details">Your {name}</p>
        <p className="money-details">Rs {money}</p>
      </div>
    </div>
  )
}

export default MoneyDetails
