import { Input } from '../../components/Input';
import { Textarea } from '../../components/TextArea';
import { NoteItem} from '../../components/NoteItem';
import { Section } from '../../components/Section';
import {Header} from '../../components/header';
import {Button} from '../../components/Button';
import {Link} from 'react-router-dom'

import { Container, Form} from './styles';

export function New(){

return(
    <Container>
        <Header> </Header>

        <main>
            <Form>
                <header>
                    <h1> Criar Nota</h1>
                    <Link to="/">Voltar</Link>
                </header>

                <Input placeholder="Título"></Input>

                <Textarea placeholder="Observações"></Textarea>

                <Section title="Links Úteis">

                    <NoteItem value="https://rocketseat.com.br" />
                    <NoteItem  placeholder="Novo Link" isNew/>
                
                </Section>

                <Section title="Marcadores">

                  <div className="tags">
                    <NoteItem value="React" />
                    <NoteItem  placeholder="Nova tag" isNew/>
                 </div>  
                </Section>

                <Button title="salvar"></Button>
            </Form>

        </main>

    </Container>


)

}