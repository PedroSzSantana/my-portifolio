import { StyleSectionPortifolio } from "./StyleSectionPortifolio"
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { ButtonGeneric, TitleSection } from "../../assets/StylesGenerics";

export const SectionPortifolio = ()=>{
    return(
            <StyleSectionPortifolio id="portifolio">
                <Bounce top cascade delay={500}> 
                    <TitleSection>Portifólio</TitleSection>
                </Bounce>
                <div>
                    <Fade left delay={800}>
                        <div>
                            <p>EM BREVE</p>
                        </div> 
                    </Fade>
                    
                    <Fade bottom delay={800}>
                        <div>
                            <p>EM BREVE</p>
                        </div> 
                    </Fade>
                    <Fade right delay={800}>
                        <div>
                            <p>EM BREVE</p>
                        </div>
                    </Fade>
                </div>
                <Fade bottom delay={800}>
                    <ButtonGeneric href="https://github.com/PedroSzSantana?tab=repositories"without rel="noreferrer"target= "_blank" className="button-generic">
                        Ver meu repositorio do Github
                    </ButtonGeneric>
                </Fade>
            </StyleSectionPortifolio>
    )
}