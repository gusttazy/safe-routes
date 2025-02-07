import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; 
import {
  SafeContainer,
  CardContainer,
  Title,
  SubTitle,
  DontHaveAccount,
  RegisterText,
} from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigation } from "@react-navigation/native"; 

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation(); 

  const handleLogin = () => {
    console.log("Login pressionado");
  };

  const handleForgotPassword = () => {
    console.log("Esqueceu a senha");
  };

  const handleBack = () => {
    navigation.goBack(); 
  };

  return (
    <SafeContainer>
      {/* Ícone de Voltar */}
      <TouchableOpacity
        onPress={handleBack}
        style={{
          position: "absolute",
          top: 60,
          left: 20,
          zIndex: 10,
        }}
      >
        <Ionicons name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <CardContainer>
        <Title>Faça Login</Title>
        <SubTitle>Preencha as informações abaixo</SubTitle>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input
          label="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Entrar" onPress={handleLogin} />

        <DontHaveAccount>
          Não possui uma conta? <RegisterText>Cadastrar-se</RegisterText>
        </DontHaveAccount>
      </CardContainer>
    </SafeContainer>
  );
};

export default Login;
