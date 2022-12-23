import './Header.css'
import NavItem,{NavItemDropDown} from '../NavItem/NavItem'

const Header = (props) => {
  return (
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container">
            <a href="#" className="navbar-brand">
              <img src="https://castletowers.qicre.com/-/media/Intelligence-Bank/Town-Square/Retailers/goodgames-logo.png" alt ='store logo' width='150' height='70'/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                
                <NavItem>
                    <li className="nav-item"><a href="#hero" className="nav-link">Home</a></li>
                </NavItem>

                <NavItem>
                    <li className="nav-item"><a href="#features" className="nav-link">Browse</a></li>
                </NavItem>

                <NavItemDropDown>
                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                        <ul className="dropdown-menu">
                            <li><a href="#learn" className="dropdown-item">CSGO</a></li>
                            <li><a href="#next" className="dropdown-item">Warzone 2.0</a></li>
                        </ul>
                    </li>
                </NavItemDropDown>
                <NavItem>
                    <li className="nav-item"><a href="#faq" className="nav-link">Profile</a></li>
                </NavItem>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header