import styled,{css} from 'styled-components';
import {IoMdArrowForward , IoMdArrowBack} from 'react-icons/io';

export const HeroSection = styled.div`
    min-height : 100vh;
    height : 100vh;
    width : 100%;
    display : flex;
    align-items : center;
`;
export const Slider = styled.div`
    position : absolute;
    top : 0;
    left : 0;
    height : 100%;
    width : 100%;
    z-index : -1;
    opacity : 0.8;
`;
export const SliderImg = styled.img`
    width : 100%;
    height : 100%;
    object-fit : cover;
`;
export const HeroContent = styled.div`
    color : white;
    letter-spacing : 0.15rem;
    text-transform : capitalize;
    padding-left : 3rem;
    font-style : italic;

    @media screen and (min-width : 768px) {
        padding-left : 7rem;
    }
`;
export const HeroContentH1 = styled.h1`
    margin-bottom : 2rem;
`;
export const HeroContentPrice = styled.p`
    margin-bottom : 2rem;
    font-weight : 700;
`;
export const BtnFoward = styled(IoMdArrowForward)`
    margin-left : 0.5rem;
`;
export const HeroDirectionIcons = styled.div`
    color: white;
    position : absolute;
    right : 7%;
    bottom : 8%;
`;
const DirectionIconCSS = css`
    width : 50px;
    height : 50px;
    background : ${({theme}) => theme.colors.btnBackground};
    border-radius : 50%;
    padding : 0.85rem;
    cursor : pointer;
    transition : background 0.3s linear;

    &:hover{
        background : ${({theme}) => theme.colors.btnHover};
    }
`;
export const Forward = styled(IoMdArrowForward)`
    ${DirectionIconCSS};
`;
export const Backward = styled(IoMdArrowBack)`
    ${DirectionIconCSS}
    margin-right : 1rem;
`;