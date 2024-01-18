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

export const FilterList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    padding: 0 100px;


    button{
        outline: 0;
        width: 80px;
        height: 30px;
        border: 0;
        border-radius: 5%;
        color: red;
        box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
        font-weight: 600;
        transition: all 0.5s;
        margin-left: 10px;
    
        &:hover{
            background-color: red;
            color: #FFF;
        }

        &:nth-child(${props => props.active + 1}){
            background-color: red;
            color: yellow;
        }
    
`;

export const IssuesList = styled.ul`
    margin-top: 30px;    
    list-style: none;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
    padding-top: 5px;
    padding-bottom: 5px;

    li{
        display: flex;
        padding: 20px 50px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 1px solid red;
        border-radius: 5px;
        margin-left: 5px;
        margin-right: 5px;

        & + li{
            margin-top: 15px;
        }

    } 
    
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid red;
        margin:right: 5px;
    }

    div{
       flex: 1; 
       margin-left: 10px;

       p{
        color: black;            
        margin-top: 8px;
        font-size: 15px;
        }
    }

    strong{
        font-size: 15px;
        display: flex;
        flex-direction: column;

        a{
            text-decoration: none;
            color: #0D2636;
            margin-bottom: 10px;
            transition: all 0.5s;

            &:hover{
                color: #0071db;
            }
        }

        span{
            color: yellow;
            margin-bottom: 5px;
            background: #222;
            padding: 8px 10px;
            border-radius: 5px;
            font-size: 12px;
            font-weight: 600;
            width: auto;
        }

    }
`;

export const PageActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    padding: 0 100px;

    button{
        outline: 0;
        width: 80px;
        height: 30px;
        border: 0;
        border-radius: 5%;
        color: red;
        box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
        font-weight: 600;
        transition: all 0.5s;
        
    
        &:hover{
            background-color: red;
            color: #FFF;
        }

        &:disabled{
            cursor: auto;           
            opacity: 0;
        }

    }


    

`;