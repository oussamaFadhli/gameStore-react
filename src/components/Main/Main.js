import './Main.css'

const Main = (props) => {
  return (
    <div className='container main-container'>
    {props.children}
    </div>
  )
}

export default Main