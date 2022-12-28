import Description from "./Description"
import Img from "./Img"
import Subtitle from "./Subtitle"

function Technology(technology){
    return(
        <section className="cards">
            <Subtitle text={technology.subtitle}/>
            <Img src={technology.link} alt={technology.alt}/>
            <Description text={technology.description}/>
        </section>
    )
}

export default Technology