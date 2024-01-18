import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    height: 100vh;
`;

export const Container = styled.div`
    max-width: 800px;
    background: #FFF;
    color: #FF0000;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
    padding: 30px;
    margin: 80px auto;
`;

export const BackButton = styled(Link)`
    border: 0;
    outline: 0;
    background: tranparent;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width:200px;
        heigth: 200px;
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
        margin: 30px 0;
    }

    h1{
        font-size: 30px;
        margin-bottom: 25px;
    }

    p{
        color: #0D2636;
        line-height: 2.4px;
        max-width: 400px;
        margin-bottom: 25px;
    }
`;

