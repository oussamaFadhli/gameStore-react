import './App.css'
import {Header,Main,Footer,Hero} from './components/index'
const App = () => {
  return (
    <>
      <Header/>
      <Main>
          <Hero/>
      </Main>
      <Footer>Footer Element</Footer>
    </>
  )
}

export default App