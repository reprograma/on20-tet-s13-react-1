<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

#  ReactJS | Aula 01 🚀 

Turma Online 20 - Todas em Tech  | Front-end | Semana 13 | 2022 | { Profa } Simara Conceição


![image](https://media2.giphy.com/media/D567hs4Dex0GEnAKOY/giphy.gif)

### Combinados

* Quem puder, manter a câmera ligada durante a aula
* Sempre levantar a mão antes de falar para não interromper outras pessoas
* Enviar as dúvidas no chat para as monitoras
* Teremos o momento de prestar atenção e o momento mão no código
---
### Objetivos da aula

* Preparar a base conceitual para realização de um projeto utilizando React
* Entender os pilares do React (state, componentes e props) e ser capaz de criar uma aplicação em React do zero

### Resumo
O que veremos na aula de hoje?
* O que é e quem usa react
* Preparando o ambiente
* "Olá, Mundo!"
* Componentes e JSX
* Props
* State

### `Prazer, Simara!`

<img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="Gif Yeah" width="200">

- Fiz migração de carreira após os 30 anos e vindo de uma área diferente
- Desenvolvedora de software na Thoughtworks 
- Criadora do podcast e canal quero ser dev 
- Professora de programação para pessoas iniciantes em instituições que ajudam a reduzir o gap de gênero e de raça no mercado de tecnologia(Reprograma, PretaLab, Movimento Black Money e outras)

#### Vamos nos conectar!

- [youtube](https://www.youtube.com/queroserdev)
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)
<br>
<br>


## Conteúdo
### `O que é e quem usa react`

Já imaginou se você pudesse aprender a programar com a tecnologia que o Facebook, Instagram, WhatsApp, Twitter, Netflix, Airbnb, Notion, Trello, Tiktok e muitas outras gigantes usam? O que mudaria de possibilidades e oportunidades para sua carreira? Já parou pra refletir sobre isso?

Pois bem, react é uma biblioteca JavaScript usada para criar interfaces para pessoas usuárias.

Já quero abrir um parenteses aqui pra explicar que bibliotecas são conjuntos de funcionalidades criadas por outras pessoas desenvolvedoras que passaram por grandes problemas, criaram soluções e resolveram deixar a solução disponível em pacotes para que outras pessoas possam usar. Boazinhas, né? Eu amooo!rs

E que interfaces de usuários são aquelas telas lindas e cheias de funções que as pessoas usuárias podem interagir. No Instagram por exemplo: a tela de login, o feed onde os posts aparecem, o explorar, os stories, cada pequeno botão de curtir, compartilhar, comentar enfim.

Sim, react e á uma das tecnologias que essas empresas que eu falei e muitas outras do Brasil e do mundo usam. Eu mesma trabalho com essa tecnologia dentro da Thoughtworks. :)

A grande vantagem é que trabalhar com React torna a vida da pessoa desenvolvedora mais fácil, pois a gente consegue criar soluções complexas de uma maneira mais simples e em menos tempo.

Além disso tudo, é importante saber também que com React é possível criar SPA. Um acrônimo para Single Page Application que é uma única página web com super poderes para lidar com diferentes dados a partir das interações das pessoas usuárias.

Na prática, quando alguém clica num botão para abrir uma página nova, o que acontece por debaixo dos panos é a atualização de uma pequena parte de nossa única tela, em vez de atualizar a página inteira para mostrar o esperado.

Eu sei que ainda tá muito abstrato pra visualizar, mas daqui a pouquinho vai fazer mais sentido. Confia em mim e vamos que vamos!

`Acesse a documentação oficial`: [ReactJS](https://pt-br.reactjs.org/)          

<br>
<br>

### `Preparando o ambiente`

Criando e entendendo meu primeiro projeto reactjs, render, estrutura de pastas, apagando arquivos padrão)

Eu sou uma pessoa supersticiosa e me contaram que toda vez que a gente está aprendendo alguma tecnologia nova, dá sorte começar com um hello world! Então vamos nessa! rs

Para essas aulas, vamos usar o editor de códido, vs code. No meu computador eu tenho também o NodeJS instalado na versão LTS e também o gerenciador de pacotes npm.

Como saber se tenho o node instalado? Abra um terminal e digite o comando abaixo:

``node -v``

Seu retorno positivo será um número parecido com esse, que é a versão correspondente: v14.17.0

Se seu retorno não for do modo acima, é porque você ainda não tem, acesse o link abaixo para instalar.

Node: https://nodejs.org/en/

Depois de instalar, rode o comando novamente e tenha certeza que instalou direitinho.

<br>
<br>

### `Olá, Mundo!`

### Criando seu primeiro projeto React com vite 

O que é e como usar vite:

`- Acesse a documentação oficial`: [Vite](https://vitejs.dev/guide/)    

`- Acesse um fio que fiz no twitter`: [Twitter da profa](https://twitter.com/SimaraConceicao/status/1529800875144781825?s=20&t=2KZjH-NL3eMEORI166W79w)  

`- Acesse um reels que fiz no instagram`: [Insta da profa](https://www.instagram.com/reel/CeBTbEoDUTM/)  

`- Siga o passo a passo aqui embaixo`
1) Lembra que eu falei que react é uma biblioteca e que a gente pode acessar e usar? Vamos fazer isso, no terminal rode o comando abaixo. Ele vai criar uma pasta contendo algumas outras pastas e arquivos dentro. Não se assuste! Demora um pouco até ficar pronto, rs.
      
``npm create vite@latest nome-do-app -- --template react``

Terminou e deu tudo certo, quando aparecer no terminal: ``Done. now run!``

2) Ainda no terminal, ele nos dá uma sugestão de entrar na pasta de nosso projeto ``cd nome-do-app``

Baixar as dependências com ``npm install``

Depois rodar com ``npm run dev``

Vamos fazer isso! 

3) Ele irá abrir um navegador sozinho usando a porta localhost:3000 e é lá que você consegue ter uma prévia de como sua página está ficando.

4) Perceba que ele rodou uma págima pronta! A gente só precisou rodar alguns pequenos comandos no terminal, certo? 

Vamos trocar esse conteúdo pelo nosso hello world. 

Vá até src > App.jsx 

 - Apague a div e tudo que está dentro dela e escreva no lugar <h1>Hello, World!</h1> 
 - Salve e volte para o navegador! 
 - Uhullllll, agora vamos começar com tudooo a entender todas essas pastas, arquivos e como estamos escrevendo num arquivo javascript/JSX e fazendo aparecer no html. <3

5) Entenda as pastas e arquivos
> node_modules

> index.html

> .gitignore

> package.json

> package-lock.json

> vite.config.js

> src
  >> app.jsx
  >> main.jsx
  >> outros arquivos que não nos interessam agora


<br>
<br>

### `Componentes e JSX`

Em react tudo é componente!
Pequenas partes onde podemos encapsular/guardar códigos e reutilizar sempre que necessário.

Se liga aqui no Instagram. Deve existir lá no código deles um componente chamado perfil. Olha como todos são exatamente iguais. 
tem o nome, a imagem, a quantidade de seguidores, seguindo, publicações, a Bio. Só o conteúdo muda de uma usuária pra outra, certo?

Se alguma funcionalidade muda, então fica muito mais fácil fazer uma manutenção, você sabe exatamente onde o código vai estar. Basta ir no componente e mudar onde a lógica está encapsulada.

Vamos aprender a criar um componente react.

Existem duas formas de criar componentes: classes e funcões.

Aqui, vamos focar somente em funções, pois em 2018 o time que criou o react introduziu uma forma de 
resolver problemas onde antes somente componentes com classes poderiam fazer. 

Eu chamo isso de React moderninho! haha
Você vai curtir, mas na próxima aula!

Um componente é justamente uma função que retorna um HTML. e quando temos javascript misturado com html chamamos de jsx. 

Vamos à prática:
Crio um arquivo com extensão jsx ou js iniciando o nome com letra maiuscula.

Dentro do arquivo crio e exporto uma função. Que poderei importar e usar em qualquer outro componente no meu projeto.

```
function SayHello() {
  return(
    <h1>Hello</h1>
  )
}

export default SayHello
```

```
function Title() {
  return(
    <h1>Eu sou um título lindão</h1>
  )
}

export default Title
```
<br>
<br>

## `Props`

Lembra do componente de perfil que a gente tá supondo que o instagram deve ter?
Como será que eles fazem pra mudar os conteúdos sempre que identificam que estamos mudando de perfil ao acessar?

Uma das soluções para fazer isso seria usando as props, ou propriedades.
Vamos à prática.
Temos o componente Title que para cada página esse título irá mudar. A gente não precisa criar um h1 toda vez e criar todo estilo novamente. Vamos encapsular em um componente e permitir que por props ele receba conteúdos diferentes para o mesmo componente.

```
function Title(props) {
  return(
    <h1>{props.text}</h1>
  )
}

export default Title
```
Ao usar esse componente, por exemplo no App.js ficaria dessa forma:

```
import Title from "caminho para o arquivo Title"

function App() {
  return(
    <div>
      <Title text="Home"/>
    </div>
  )
}
```

Dentro das props também existem o children e basicamnete em vez de usar dentro de atributos em tags de autofechamento usaríamos como conteúdo em componentes de fechamento e de abertura. Assim:

```
function Name(props) {
  return(
    <p>{props.children}</p>
  )
}

export default Name
```
Ao usar esse componente, por exemplo no App.js ficaria dessa forma:

```
import Title from "caminho para o arquivo Name"

function App() {
  return(
    <div>
      <Name>Simara Conceição</Name>
    </div>
  )
}
```
     
<br>
<br>

### `State`

Estado é o super poder que vai renderizar quase que em tempo real, o componente com as informações atualizadas de acordo com a interação da pessoa usuária ou regras que criamos no componente.

Diferente das props, a gente não repassa o estado pra o componente  quando vai utilizá-lo, mas a gente cria o estado dentro do próprio componente usando variaveis que terão seus valores atualizados. 

É importante também saber que o estado não muda, ou seja, ele nunca vai ser alterado, mas vai ser sobreposto a partir do seu estado atual.

Vamos entender melhor, já já, quando formos aprender hooks.

`Acesse a documentação oficial`: [ReactJS](https://pt-br.reactjs.org/)          

<br>


***
## `Mão no código`

> Para sala

| Exemplo 01 | Descrição |
| --- | --- |
| `Olá, mundo!` | Vamos criar seu primeiro projeto React e dar um "Olá, mundo!" |

| Exemplo 02 | Descrição |
| --- | --- |
| `Componentes` | Usando o mesmo projeto criado no exemplo 1, vamos criar e usar alguns componentes. |

| Exemplo 03 | Descrição |
| --- | --- |
| `Props` | Usando o mesmo projeto criado no exemplo 1, vamos criar e usar alguns componentes que irão receber os conteúdos por props |

| Exemplo 04 | Descrição |
| --- | --- |
| `Children` | Usando o mesmo projeto criado no exemplo 1, vamos criar e usar alguns componentes que irão receber os conteúdos por children. |

> Projeto da semana

Vamos iniciar um projetinho react do zero com direito a componetização e uso de props.

O Projetinho será: "Meus conteúdos favoritos"
E deverá conter os componentes como descrito abaixo.

`- Eu fiz o meu, vem aqui entender melhor e se inspirar`: [Meu site](https://projeto-react1.netlify.app/) 

> O que deve ser feito:
1) Crie seu projeto react com vite
2) Suba esse projeto no seu github, inclua um read me contando tudo o que você aprendeu na aula. 
3) Atenção! A entrega deverá ser feita pelo classroom e será o link do seu repositório. Arraseee! E qualquer coisa, me chama!

#### Componentes maiores
> componentes que usam os componentes menores recebendos os conteúdos por props

* Bio 
* Cards

#### Componentes menores

> somente o esqueleto, os conteúdos serão inclusos por props

* Title 
* Subtitle
* Text
* Image
* Header
* Footer

# Estrutura do App

> recebe todos os conteúdos que devem aparecer na tela e recebe também o conteúdo do footer e header por props


```
import { Header } from './components/Header'
import { Bio } from './components/Bio'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header content="Meus conteúdos favoritos" />
      <Bio />
      <Cards />
      <Footer content="Feito com ♡ por Simara. E todos os direitos são reservados." />
    </div>
  )
}

export default App
```


<p align="center">
Feito com 💜 por Simara Conceição
</p>

