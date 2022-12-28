
import Img from "./Img"
import Technology from "./Technology"
import Description from "./Description"

function Cards(cards){
    return(
        <section className="technology">

        <Technology 
            subtitle="Git & Github" 
            link="https://gist.githubusercontent.com/ManulMax/2d20af60d709805c55fd784ca7cba4b9/raw/bcfeac7604f674ace63623106eb8bb8471d844a6/github.gif"
            alt=""
            description="Git é uma ferramenta de sistema de controle de versões que é usada principalmente no desenvolvimento de software. Eu tenho utilizado o git atraves de diversas ferramentas, até o presnte momentao a minha favolrita é o proprio terminal do computador e a rede social  Github como logal de armazenamento e divulgação." 
            / >
        
        <Technology 
            subtitle="HTML" 
            link="https://www.nobledesktop.com/image/classExamples/html-intro/html-intro.gif" 
            alt=""
            description="HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa: Linguagem de Marcação de Hipertexto) é uma linguagem de marcação.É a base do site, o esqueleto, é uma tecnolgoa que eu gosto de usar e domino bem."
            / >
        
        <Technology 
            subtitle="CSS" 
            link="https://media.tenor.com/QWdPngpHxZ8AAAAM/family-guy-css.gif" 
            alt="a mushroom, a flower and a star being exchanged for their parts."
            description="CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. CSS é responsave pela personalização visual de um site. personalização visual de um site. Essa é a tecologia que mais gosto de brincar e testar opições." 
            / >

        <Technology 
            subtitle="Javascript" 
            link="https://miro.medium.com/max/900/1*q99J7XLYVWgOt69E8IuXqw.gif" 
            alt="a mushroom, a flower and a star being exchanged for their parts."
            description="Códigos escritos na linguagem Javascript podem fazer várias atividades: atualizar apenas parte de uma página para acelerar a navegação, validar dados de um formulário ou até permitir usar jogos dentro do próprio navegador. estudar JS é como abrir as portar para um mundo de magia, dificil mas encantador." 
            / >
        
        <Technology 
            subtitle="React" 
            link="https://images.ctfassets.net/0nm5vlv2ad7a/6naVcO5MsOWXuYiol4l43R/9170af8985a9af2f9218cb02806eecbc/benefits-of-react.png" 
            alt="a mushroom, a flower and a star being exchanged for their parts."
            description="As bibliotecas agrupam códigos e ajudam a fazer seu trabalho mais rápido.No curso abordamos React." 
            / >
    
    </section>
    )
}
export default Cards