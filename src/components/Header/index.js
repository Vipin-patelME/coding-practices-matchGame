import './index.css'

const Header = props => {
  const {count} = props
  return (
    <nav className="nav-style">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="header-logo"
        />
      </div>
      <div className="counter-item-cont">
        <div className="child-div">
          <p className="count-para">
            Score: <span className="span-style">{count}</span>
          </p>
        </div>
        <div className="child-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <span className="span-style"> 60 sec</span>
        </div>
      </div>
    </nav>
  )
}
export default Header
