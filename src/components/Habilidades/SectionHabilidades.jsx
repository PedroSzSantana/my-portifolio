import {  useState } from "react"
import { TitleSection } from "../../assets/StylesGenerics"
import { StyleDivHability, StyleHability, StyleImagesHability } from "./StyleSectionHabilidades"


 const SectionHabilidades = ()=>{

    const [count, setCount] = useState('selecione alguma habilidade')

    const Text_html = 'Conhecimentos avançados em desenvolver um HTML bem estruturado de facil entendimento.'

    const Text_css = 'Conhecimento Avançado em CSS, buscando deixar o codigo mais limpo possivel com o reaproveitamento de linhas,  FlexBox, CSSGrid, Responsividade e conhecimento em BootStrap basico.'

    const Text_js = 'Conhecimento Basico em JavaScript, manipulação de Eventos, DOM (Document Object Model) e Formularios.'

    return(
        <StyleHability id="habilidades">
            <TitleSection>Habilidades</TitleSection>
            <StyleDivHability>
                <StyleImagesHability>
                    <div>
                        <img onClick={()=> {setCount(Text_html)}} src="https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png" alt="Icone HTML5"/>


                        <img onClick={()=> {setCount(Text_css)}} src="https://logospng.org/download/css-3/logo-css-3-768.png" alt="Icone Css"/>
                    </div>
                    <div>
                        <img onClick={()=> {setCount(Text_js)}} src="https://dicasdejavascript.com.br/images/logo-javascript.png" alt="Icone Javascript"/>

                        <img src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png" alt="Icone React"/>
                    </div>
                </StyleImagesHability>
                <div>
                    <p>
                        {count}
                    </p>
                </div>
            </StyleDivHability>
        </StyleHability>
    )
}
export default SectionHabilidades