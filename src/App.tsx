import { Header } from './components/Header'
import { Photo } from './components/Photo'

const App = () => {
  return (
    <div>
      <Header title="Este é um exemplo" />

      <br />

      <Photo legend='google img'>
        <img src="http://www.google.com/google.jpg" alt="" />
      </Photo>


    </div>
  )
}

export default App;