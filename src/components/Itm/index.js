const Itm = props => {
  const {k, ondel} = props
  const {id, domainUrl, timeAccessed, logoUrl, title} = k

  const bt = () => {
    ondel(id)
  }
  return (
    <div>
      <li>
        <p>{timeAccessed}</p>
        <p>{title}</p>
        <p>{domainUrl}</p>
        <img src={logoUrl} alt="domain logo" />

        <div>
          <button data-testid="delete" onClick={bt} type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default Itm
