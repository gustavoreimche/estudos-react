import { Header } from './components/Header'
import { Photo } from './components/Photo'
import { useState } from 'react';


const App = () => {
  const[numero, setNumero] = useState(0);

  const handleButtonClick = () => {
    setNumero(numero+10);
  }

  return (
    <div>

      <Header title="Este é um exemplo" />

      <Photo legend='google img'>
        <img src="http://www.google.com/google.jpg" alt="" />
      </Photo>

      <button onClick={handleButtonClick}>Clique aqui</button>
      <br />
      O numero é: {numero}
    </div>
  )
}

export default App;
