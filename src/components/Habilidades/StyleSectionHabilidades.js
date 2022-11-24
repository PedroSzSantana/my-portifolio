import styled from "styled-components";

export const StyleHability = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    text-align: left;
    background: linear-gradient(#383838, #383838);
    .ocult{
        display: none;
    }
`
export const StyleDivHability = styled.div`
    display: flex;
    align-items: center;
    color: #ffff;
    margin: 0 50px 0 100px;
    div{
        p{
            width: 600px;
            font-size: 20px;
            font-weight: 600;
        }
    }
`
export const StyleImagesHability = styled.div`
    img{
        cursor: pointer;
        width: 150px;
    }
    img:hover{
        opacity: 0.7;
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }
`