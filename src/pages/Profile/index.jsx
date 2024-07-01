import {Container, Form, Avatar} from './styles'
import {FiArrowLeft, FiMail, FiUser, FiLock, FiCamera} from 'react-icons/fi'
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import imagem from '../../Assets/imagem.jpg';
import { Link } from 'react-router-dom';



export function Profile(){

        return(
            <Container>
                    <header>
                        <Link to="/">
                            <FiArrowLeft/>
                        </Link>

                    </header>

                    <Form>

                        <Avatar>
                           <img src={imagem} alt="foto do usuario" />

                            <label htmlFor="avatar">
                                <FiCamera />

                                <input 
                                    id='avatar'
                                    type='file'
                                />
                                
                                </label>    


                        </Avatar>

                        <Input
                            placeholder = "Nome"
                            type="text"
                            icon={FiUser}
                        />

                        <Input
                            placeholder = "E-mail"
                            type="text"
                            icon={FiMail}
                        />

                        <Input
                            placeholder = "Senha atual"
                            type="password"
                            icon={FiLock}
                        />

                        <Input
                            placeholder = "Nova senha"
                            type="password"
                            icon={FiLock}
                        />


                        <Button title="Salvar"></Button>

                    </Form>

            </Container>
        )

}