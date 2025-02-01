import React from 'react';
import { SafeContainer, HeaderImage, ContentContainer, Title, Description, AlreadyAccount, LoginText } from './styles';
import Button from '../../components/Button';

const Home: React.FC = () => {
  const handlePress = () => {
    console.log("Botão pressionado");
  };

  return (
    <SafeContainer>
      <HeaderImage source={require('../../../assets/images/header.jpg')} />

      <ContentContainer>
        <Title>Bem-vindo ao SafeRoutes</Title>
        <Description>
          Garanta uma viagem segura e tranquila, com alertas em tempo real e
          monitoramento constante.
        </Description>

        <Button title="Começar Agora" onPress={handlePress} />

        <AlreadyAccount>
          Já possui uma conta? <LoginText>Faça Login</LoginText>
        </AlreadyAccount>
      </ContentContainer>
    </SafeContainer>
  );
};

export default Home;
