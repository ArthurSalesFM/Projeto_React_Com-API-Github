import React from "react";
import {Container, Form, SubmitButton} from './styles';
import { FaGithub, FaPlus } from 'react-icons/fa'

export default function Main(){
    return(
        
        <Container>

            <h1>
                <FaGithub size={45}/>
                Meus Repositórios
            </h1>

            <Form onSubmit={() => {}}>

                <input type="text" placeholder="Adicionar repositório..."/>

                <SubmitButton>
                    <FaPlus size={15} color="red"/>
                </SubmitButton>

            </Form>
            
        </Container>

    );
}