import styled from 'styled-components';

const Button = styled.button`
    padding : 1rem 1.4rem;
    display : flex;
    border-radius : 10px;
    border : none;
    font-weight : 600;
    background : ${({theme}) => theme.colors.btnBackground};
    color : white;
    transition : background 0.3s linear;

    &:hover{
        background : ${({theme}) => theme.colors.btnHover};
    }
`;

export default Button;