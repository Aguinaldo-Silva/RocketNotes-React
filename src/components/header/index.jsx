import{RiShutDownLine} from 'react-icons/ri';

import {Container, Profile, Logout} from './styles';

export function Header(){
    return(
        <Container>
            <Profile to="/Profile">
                <img src='https:github.com/Aguinaldo-Silva.png' 
                alt='Foto do Usuário' />

                <div>
 
                    <span>Bem vindo,</span>
                    <strong>Aguinaldo Silva</strong>
                </div>

            </Profile>


            <Logout>
                <RiShutDownLine />

            </Logout>



        </Container>
    )

}