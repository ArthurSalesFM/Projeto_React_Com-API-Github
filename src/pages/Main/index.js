import React, { useState, useCallback, useEffect } from "react";
import {Container, Form, SubmitButton, List, DeleteButton} from './styles';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import api from "../../services/api";

export default function Main(){
    
    const [ newRepo, setNewRepo ] = useState('');
    const [ repositorios, setRepositorios ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    //Buscar
    useEffect(() => {
        const repoStorage = localStorage.getItem('repos');

        if(repoStorage){
            setRepositorios(JSON.parse(repoStorage));
        }

    }, []);

    //Salvar alterações
    useEffect(() => {
        localStorage.setItem('repos', JSON.stringify(repositorios));
    }, [repositorios]);


    function handleInputChange(event){
        setNewRepo(event.target.value);        
    }


    const handleSubmit = useCallback((event) => {

        event.preventDefault();

        async function submit() {
                
            setLoading(true);
            //setAlerta(false);

            try{

                const response = await api.get(`repos/${newRepo}`);        

                const hasRepo = repositorios.find( repo => repo.name === newRepo);

                if(hasRepo){
                    throw new Error('Repositório duplicado!');
                }
                else{

                    const data = {
                        name: response.data.full_name,
                    }
    
                    setRepositorios([...repositorios, data]);
                }               

                setNewRepo('');
            }

            catch(error){
                //setAlerta(true);
                alert('Falha no busca do repositório.\nVerifique o nome do usuário e do repositório.');
            }

            finally{
                setLoading(false);
            }                
        }

        submit();

    }, [newRepo, repositorios]);


    const handleDelete = useCallback((repo) =>{

        const find = repositorios.filter(r => r.name !== repo);
        setRepositorios(find);

    }, [repositorios]);



    return(
        
        <Container>

            <h1>
                <FaGithub size={45}/>
                Busca Repositórios
            </h1>

            <Form onSubmit={ handleSubmit }>

                <input 
                    type="text" 
                    placeholder="Usuário... /Repositório..."
                    value={newRepo}
                    onChange={handleInputChange}
                />

                <SubmitButton loading={loading ? 1 : 0}>
                    { loading ? (<FaSpinner size={15} color="red"/>) : (<FaPlus size={15} color="red"/>) }                    
                </SubmitButton>

            </Form>

            <List>
                {
                    repositorios.map(repo => (
                        <li key={repo.name}>

                            <DeleteButton onClick={() => handleDelete(repo.name)}>
                                <FaTrash size={15} />
                            </DeleteButton>                            

                            <span>{repo.name}</span>

                            <a href="">
                                <FaBars size={20} />
                            </a>
                        </li>
                    ))
                }
            </List>
            
        </Container>

    );
}