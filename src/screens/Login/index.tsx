import React, { useState } from 'react';
import { SafeContainer, CardContainer, Title, ForgotPasswordButton, ForgotPasswordText, SubTitle } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login pressionado');
  };

  const handleForgotPassword = () => {
    console.log('Esqueceu a senha');
  };

  return (
    <SafeContainer>
      <CardContainer>
        <Title>Entrar</Title>
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
        <Button 
          title="Entrar" 
          onPress={handleLogin}
        />
        <ForgotPasswordButton onPress={handleForgotPassword}>
          <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
        </ForgotPasswordButton>
      </CardContainer>
    </SafeContainer>
  );
};

export default Login;
