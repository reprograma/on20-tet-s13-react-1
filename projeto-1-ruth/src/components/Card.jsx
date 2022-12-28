import Title from "./Title"
import About from "./About"
import Cards from "./Cards"

function Card(card){
    return(
        <section>
         <Title text={card.title} />
            <About text={card.about} />   
            <Cards text={card.cards} />
       </section>
    )
}
export default Card