import { StyleSobremim } from "./StyleSobremim"
import Rotate from 'react-reveal/Rotate';
import { Flip } from "react-reveal";
import { TitleSection } from "../../assets/StylesGenerics";


export const SectionSobreMim = ()=>{
    return(
        <StyleSobremim id="Sobre-mim">
                        <Rotate delay={800} top left>
                            <TitleSection>Sobre Mim</TitleSection>
                        </Rotate>
                    <article>
                            <Flip left cascade delay={1000} duration={2000}>
                            Meu nome é Pedro Souza, sempre estive em contado com tecnologia desde muito novo, bom não sei como eu realmente me interessei em estudar programação parece que foi o destino, quando me dei conta percebi que programar era realmente o que eu amo fazer.
                            Comecei a estudar programação em 2021, atualmente com conhecimento em font-end, estudando novas tecnologias para virar um programador Full-Stack.
                            </Flip>
                    </article>
        </StyleSobremim>
    )
}