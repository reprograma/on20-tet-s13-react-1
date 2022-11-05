import Subtitulo from '../components/Subtitulo'
import Paragrafo from '../components/Paragrafo'
import Foto from './Foto'

function Cards() {
  return (
    <div className="cards_container">
      <div className="card">
        <Subtitulo />
        <Paragrafo />
        <Foto />
      </div>
      <div className="card">
        <Subtitulo />
        <Paragrafo />
        <Foto />
      </div>
      <div className="card">
        <Subtitulo />
        <Paragrafo />
        <Foto />
      </div>
    </div>
  )
}

export default Cards