import theme from '../../styles/theme';
import styled from 'styled-components/native';

export const Box = styled.View`
  background-color: ${theme.colors.background};
`;

export const ImageHeader = styled.Image`
  width: 100%;
  height: 55%;
  resize-mode: cover;
`;

export const Container = styled.View` 
  flex: 1;
  justify-content: flex-start;  
  align-items: center;
  background-color: ${theme.colors.background};
`;

export const WelcomeText = styled.Text`
  font-family: ${theme.fonts.extrabold};  
  font-size: 45px;
  color: ${theme.colors.greenPrimary};  
  text-align: center;
  margin-top: 5px;
`;

export const SubText = styled.Text`
  font-family: ${theme.fonts.regular};  
  font-size: 13px;
  color: ${theme.colors.text};  
  text-align: center;
  margin-top: 5px;
  width: 70%;
`;

export const JaPossuiConta = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 13px;
  color: ${theme.colors.text};
  margin-top: 10px;
`;

export const Entrar = styled.Text`
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.greenPrimary};
  
`;