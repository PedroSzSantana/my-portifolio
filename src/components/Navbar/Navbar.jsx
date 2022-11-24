import { StyleNavbar } from '../Navbar/StyleNavbar'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Navbar =()=>{
    return(
        <StyleNavbar>
            <nav>
                <ul>
                    <AnchorLink href='#inicio'>Inicio</AnchorLink>
                    <AnchorLink href='#Sobre-mim'>Sobre</AnchorLink>
                    <AnchorLink href='#portifolio'>Projetos</AnchorLink>
                    <AnchorLink href='#habilidades'>Habilidades</AnchorLink>
                </ul>
            </nav>
        </StyleNavbar>
    )
}