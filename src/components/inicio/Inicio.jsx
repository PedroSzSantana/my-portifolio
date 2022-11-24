import { StylePerfil } from "./StyleInicio"
import PicPerfil from '../../assets/images/20220918_13310111.png'
import { Fade } from 'react-reveal';
import Flash from 'react-reveal/Flash';
import { ButtonGeneric } from "../../assets/StylesGenerics";
import { Animation } from "./Animation";

export const Inicio = ()=>{
    return(
        <>
            <Animation/>
                <StylePerfil id="inicio">
                    <Fade delay={1000} top cascade>
                        <div>
                            <h3>Oi, eu sou</h3>

                            <Flash delay={1300} forever timeout={3000}>  
                                <h1 className="font-name" id="name">Pedro Souza</h1>                        
                            </Flash>
                            <h2>Desenvolvedor Web Full Stack</h2>
                            <ButtonGeneric href="https://www.linkedin.com/in/pedro-souza-3ab330226/"without rel="noreferrer"target= "_blank" >
                                Meu Linkedin
                            </ButtonGeneric> 
                        </div>
                    </Fade>
                    <Fade right>                        
                        <div>
                            <img src={PicPerfil} alt="Foto Perfil"/>
                        </div>
                    </Fade>
                </StylePerfil>
        </>
    )
}