import { Container, Form, Background } from "./styles";
import { useState } from "react";
import {Input} from '../../components/Input'
import { FiMail, FiLock, FiUser} from 'react-icons/fi'
import {api} from "../../services/api"

import {Button} from '../../components/Button';
import { Link, useNavigate } from "react-router-dom";

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
           return alert("preencha todos os campos")
        }

        api.post("/users" , {name, email, password})
        .then(() => {
            alert("usuario cadastrado")
            navigate("/");
        })
        .catch(error =>{
            if(error.response){
                alert(error.response.data.message)
                
            }else{
                alert("não foi possivel cadastrar")
            }
        })
    }


    return(

        <Container>

        <Background></Background>

            <Form>
            <h1>Rocket Notes</h1>
            <p>Aplicação para slvar e gerenciar seus links</p>

            <h2>Crie sua conta</h2>

            <Input  
                placeholder="Nome"
                type="text" 
                icon={FiUser} 
                onChange = {e => setName(e.target.value) }
             />

            <Input  
                placeholder="E-mail"
                type="text" 
                icon={FiMail} 
                onChange = {e => setEmail(e.target.value) }
             />
            <Input  
                placeholder="Senha"
                type="password" 
                icon={FiLock} 
                onChange = {e => setPassword(e.target.value) }
             />

                <Button title="Cadastrar" onClick= {handleSignUp}/>   

                <Link to="/">
                    Voltar para o login
                </Link>


                </Form>

                
        </Container>
    );
}