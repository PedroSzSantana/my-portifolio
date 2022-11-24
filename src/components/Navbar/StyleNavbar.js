import styled from 'styled-components'

export const StyleNavbar = styled.header`

    background-color:rgb(113, 113, 113) ;
    position: fixed;
    width: 100%;
    opacity: 0.7;
    nav{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;

        ul {
            display: inline-flex;
            gap: 30px;
            list-style: none;
            
            
                a {
                    text-decoration: none;
                    color: #ffff;
                    font-size: 18px;
                    font-weight: 600;
                }
                a:hover{
                    text-decoration: underline 2px;
                    text-underline-offset: 2px;
                    opacity: 1;
                }      
        }
    }
@media screen and (max-width: 500px){

        width: 100%;
    nav{
        height: 30px;
        
        ul {
        justify-content: space-between;
        }
    }
}

`