import SectionHabilidades from "../components/Habilidades/SectionHabilidades"
import { Inicio} from "../components/inicio/Inicio"
import { Navbar } from "../components/Navbar/Navbar"
import { SectionPortifolio } from "../components/Portifolio/SectionPortifolio"
import { SectionSobreMim } from "../components/Sobre-mim/Sobremim"


const Index = ()=>{
    return(
        <div>
           <Navbar/>
            <Inicio/>
            <SectionSobreMim/>
            <SectionPortifolio/>
            <SectionHabilidades/>
        </div>
    )
}


export default Index