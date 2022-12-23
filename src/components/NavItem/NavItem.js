import './NavItem.css'

const NavItem = (props) => {
  return (
    <li className='nav-items'>{props.children}</li>
  )
}
const NavItemDropDown = (props) => {
  return (
    <li className='nav-items dropdown'>{props.children}</li>
  )
}

export default NavItem;
export {NavItemDropDown};