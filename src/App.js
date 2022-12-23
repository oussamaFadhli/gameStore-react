import './App.css'
import {Main} from './components/index'
import {Header,Hero,MostPopular,Footer} from './sections/index'
const App = () => {
  return (
    <>
      <Header/>
      <Main>
          <Hero/>
          <MostPopular/>
      </Main>
      <Footer>Footer Element</Footer>
    </>
  )
}

export default App