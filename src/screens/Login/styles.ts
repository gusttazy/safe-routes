import styled from "styled-components/native";
import theme from "../../styles/theme";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.greenPrimary};
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.View`
  width: 90%;
  background-color: ${theme.colors.background};
  border-radius: 8px;
  padding: 30px 30px;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.extrabold};
  font-size: 30px;
  color: ${theme.colors.greenPrimary};
  text-align: center;
  margin-bottom: 10px;
`;

export const DontHaveAccount = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 13px;
  color: ${theme.colors.text};
  margin-top: 20px;
  text-align: center;
`;

export const RegisterText = styled.Text`
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.greenPrimary};
`;

export const SubTitle = styled.Text`
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.textSecondary};
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
`;
