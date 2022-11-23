import Titulo from './components/Titulo'
import Imagem from './components/imagem'
import Paragrafo from './components/Paragrafo'
import Footer from './components/Footer'


function Card() {
    return(
        <section>
        <div className='Bio'>
        <Titulo titulo="Salam, eu sou a Fedra!"/>
        <Imagem link="https://github.com/fedra92.png" />
        <Paragrafo paragrafo="Sou uma programadora Front-End em formação pela Reprograma. Sou formada em Artes e estou em transição de carreira, tendo trabalhado antes com Fotografia e UX Design. Saiba mais sobre o que estou aprendendo."/>
        </div>

        <div className='HTML-e-CSS'>
        <Titulo titulo="HTML e CSS"></Titulo>
        <Imagem link="https://media2.giphy.com/media/xUySTWeLmNO4cTpz5m/giphy.gif?cid=790b7611155966588eead0241361d3ae5069ae2af3b0a004&rid=giphy.gif&ct=g"/>
        <Paragrafo paragrafo="O primeiro assunto que aprendi no curso foi HTML e CSS. Confesso que não achei muito complicado. Acho que o meu background em Artes me ajudou a ver o CSS como uma espécie de linguagem artística mesmo. Diferente do que eu estava acostumada, com certeza, mas não tãão diferente assim!
    Confesso que já estava me sentindo pronta para entrar na matrix nesse ponto."/>
        </div>

        <div className='Javascript'>
        <Titulo titulo="Javascript"></Titulo>
        <Imagem link="https://media3.giphy.com/media/xUySTY0iIdp3kPUHFS/giphy.gif?cid=790b76116b5f82bbe2e16c826a031b57525283d6fb666743&rid=giphy.gif&ct=g"/>
        <Paragrafo paragrafo="Aqui foi o ponto que começamos a estudar lógica de programação e foi aí que comecei a sentir dificuldade. Havia pelo menos uma década que eu estudei raciocínio lógico e matemática e me vi tendo muita dificuldade. Na verdade, foi como mexer de novo em algumas traumas e crenças limitantes de que eu não seria capaz de aprender isso. Nunca me ocorreu desistir, mas foi um processo de me permitir aprender e encarar essas crenças de frente. Mas ver os resultados de aprender essa linguagem e, de fato, criar programas, me deixou muito motivada a aprender cada vez mais. Aprendemos funções, listas, métodos e como consumir APIs, as principais ações que podemos usar Javascript para criar soluções para problemas. Algumas semanas aprendendo, usando e praticando e já me sinto segura para criar soluções para problemas reais de front-end!"/>
        </div>

        <div className='React'>
        <Titulo titulo="React"></Titulo>
        <Imagem link="https://media2.giphy.com/media/X6FfLlPywj36o/giphy.gif?cid=790b761197cf8801ce73f63651b15553b1e63a8a13800136&rid=giphy.gif&ct=g"/>
        <Paragrafo paragrafo="Atualmente estamos aprendendo o React, e sem problemas por aqui! O React usa conhecimentos de HTML e Javascript, o que já estudamos extensamente. Esta página foi feita no React. Estou achando bem interessante e mais fácil do que as outras coisas até agora! Me sentindo a mestre hacker já."/>
        </div>

        <div>
          <Footer footer="Feito por Fedra Portela. Todos os direitos reservados."/>  
        </div>

        </section>
    )
}

export default Card