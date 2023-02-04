import './index.css'

const HistoryItem = props => {
  const {initialHistoryList, deleteHistory} = props
  const {timeAccessed, title, domainUrl, logoUrl, id} = initialHistoryList

  const deleteItem = () => {
    deleteHistory(id)
  }
  return (
    <li className="item">
      <div className="main-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">
          {title}&nbsp;<p className="domain">{domainUrl}</p>
        </p>
      </div>
      <button
        type="button"
        className="delete-button"
        data-testid="delete"
        onClick={deleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
