// src/screens/Home/index.tsx
import React from "react";
import { SafeAreaView } from "react-native";
import { Box, ImageHeader, Container, WelcomeText, SubText, JaPossuiConta, Entrar } from "./styles";
import Button from "../../components/Button";  

const Home: React.FC = () => {
  const handlePress = () => {
    console.log("Botão pressionado");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageHeader 
        source={require("../../../assets/images/header.jpg")} 
      />

      <Box />

      <Container>
        <WelcomeText>Bem-vindo ao SafeRoutes</WelcomeText>
        <SubText>
          Garanta uma viagem segura e tranquila, com alertas em tempo real e
          monitoramento constante.
        </SubText>

        <Button 
          title="Começar Agora" 
          onPress={handlePress}  
        />

        <JaPossuiConta>
          Ja possui uma conta? <Entrar>Faça Login</Entrar>
        </JaPossuiConta>

      </Container>
    </SafeAreaView>
  );
};

export default Home;
