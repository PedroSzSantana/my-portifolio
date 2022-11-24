import styled from "styled-components";
import Gif from '../../assets/images/d7b3da3d4b19b7f0c44673374158df0a.gif'

export const Animation = ()=>{
    return(
        <>
            <AnimationGif1>
                <img className="gif_bnc animationgif" src={Gif} alt=""/>
            </AnimationGif1>
            <AnimationGif2>
                <img className="gif_bnc gif_bnc2 animationgif2" src={Gif} alt=""/>
            </AnimationGif2>
        </>
    )
}
export const AnimationGif1 = styled.div`
    width: 100%;
    border-bottom: solid 1px rgb(39, 39, 39);
    overflow: hidden;
    position: absolute;
    height: 70px;
    margin-left: 20px;
    margin-top: 10%;
    transform: rotateZ(15deg);
        img{
            position: absolute;
            width: 80px;
            animation: movimentBNC 15s infinite;
        }
    @keyframes movimentBNC {
        0% {
        margin-left: -50px; 
        }
        100%{
            margin-left: 200%;
        }
    }
    @media screen and (max-width: 500px) {
        display: none;
}

`
export const AnimationGif2 = styled.div`
    width: 100%;
    border-bottom: solid 1px rgb(39, 39, 39);
    overflow: hidden;
    position: absolute;
    height: 70px;
    margin-left: 0px;
    margin-top:35%;
    transform: rotateZ(-13.5deg);

        img{
            position: absolute;
            width: 80px;
            animation: movimentBNC2 15s infinite;
            transform: rotateY(180deg);
        }

    @keyframes  movimentBNC2{
        0%{
        margin-left: 200%; 
        }
        100%{
            margin-left: -50px;
        }
    }
@media screen and (max-width: 500px) {
        display: none;
}
`