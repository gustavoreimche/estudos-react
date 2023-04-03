import { Header } from './components/Header'
import { Photo } from './components/Photo'

const App = () => {

  const handleButtonClick = () =>{
    alert("O botão foi clicado");
  }

  return (
    <div>
      
      <Header title="Este é um exemplo" />

      <br />

      <Photo legend='google img'>
        <img src="http://www.google.com/google.jpg" alt="" />
      </Photo>

      <button onClick={handleButtonClick}>Clique aqui</button>

    </div>
  )
}

export default App;