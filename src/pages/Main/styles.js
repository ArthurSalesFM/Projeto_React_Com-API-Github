import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
    color: #FF0000;
    max-width: 800px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
    padding: 30px;
    margin: 80px auto;

    h1{
        font-size: 25px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        margin-top: 10px;
    }

    h1 svg{
        margin-right: 10px;
    }
    
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input{
        flex: 1;
        border: 1px solid red;
        padding: 10px 15px;
        border-radius: 5px
    }

    input:hover{
        border: 1px solid blue;
    }

    input:focus{
        border: 1px solid green;
    }
`;

//Criando animação do botão
const animacao = keyframes`

    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`;

export const SubmitButton = styled.button.attrs( props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    margin-left: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid red;

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${props => props.loading && 
        css`
            svg{
                animation: ${animacao} 2s linear infinite;
            }
        `
    }

`;

export const List = styled.ul`    
    list-style: none;
    margin-top: 25px;

    li{
        padding: 15px 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border: 1px solid red;
        border-radius: 5px;
        color: #0D2636;
        margin-bottom: 15px;
    }

    li:hover{
        border: 1px solid blue
    }

    li a sgv{
        color: #0D2636;
    }
    
`;

export const DeleteButton = styled.button.attrs({
    type: 'button'
})`
    border: none
`;