import './App.css'
import Imagem from './sala/Imagem'
import LayllaImg from './assets/Laylla.jpeg'
import MariImg from './assets/mari.jpeg'
import RockImg from './assets/Rock.png'

function App() {
  return (
    <div className="imagens_container">
      <Imagem estilo="imagem" arquivo={LayllaImg} />
      <Imagem estilo="imagem" arquivo={MariImg} />
      <Imagem estilo="imagem" arquivo={RockImg} />
    </div>
  )
}

export default App