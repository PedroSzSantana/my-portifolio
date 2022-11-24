import styled from 'styled-components'

export const TitleSection = styled.h1`
        display: flex;
        font-size: 70px;
        justify-content: center;
        color: #ffff;
        overflow: hidden;

@media screen and (max-width: 500px) {
    font-size: 60px;
}
`
export const ButtonGeneric = styled.a`
    background-color: darkgray;
    color: #ffff;
    text-decoration: none;
    padding: 10px 120px 10px 120px;
    border-radius: 20px;
    margin-top: 20px;
        
    :hover{
        background-color: rgb(104, 104, 104);
    }
    @media screen and (max-width: 500px) {
        padding: 0 ;
        text-align: center;
        width: 200px;
    }
`
export const ModelSections = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    text-align: left;
    
`