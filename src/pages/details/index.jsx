import { Container, Links,  Content } from "./styles";

import { Header } from '../../components/header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';


export function Details(){
  return(
    <Container>
      <Header></Header>

      <main>
        <Content>

      <ButtonText title="excluir nota"></ButtonText>

        <h1> Introdução ao react</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            In praesentium provident repellat eos amet 
            dignissimos natus minima, a dolores autem neque deleniti 
            quo voluptatibus porro perspiciatis quidem. Iusto, quaerat!
             Quidem.</p>
        <Section title="Links Úteis">
        <Links>
           <li><a href="https://www.alienwarearena.com/wallpapers"> https://www.alienwarearena.com/wallpapers</a></li>
          <li><a href="https://www.alienwarearena.com/wallpapers">https://www.alienwarearena.com/wallpapers</a></li>
          </Links>

        </Section>

        <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="NodeJs" />

        </Section>
    
       <Button title="voltar"/>
    
    
    </Content>
</main>

  </Container>
);

};