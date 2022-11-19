import { Subtitle } from './Subtitle'
import { Text } from './Text'
import { Image } from './Image'
import '../styles/bio.css'

export function Bio() {
  return(
    <div className="bio_container">
      <Image link="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" />
      <div className="bio_text">
        <Subtitle texto="Simara" />
        <Text content="Ex-aluna reprograma, fiz migração de carreira após os 30 anos e vindo da área de marketing, Desenvolvedora de software na Thoughtworks e Criadora do podcast e canal quero ser dev" />
      </div>
    </div>
  )
}