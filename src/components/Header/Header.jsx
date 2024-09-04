import linoor from '../../assets/images/photo (1).png'

import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <img src={linoor} alt="linoor" className="linoor-logo" />
      <div className="menus">
        <ul>
          <li>
            <a>DEMOS
              
            </a>
          </li>
          <li>
            <a>ABOUT US</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
