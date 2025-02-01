import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface ButtonContainerProps {
  backgroundColor: string;
  borderRadius: string;
  padding: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

interface ButtonTextProps {
  textColor: string;
}

export const ButtonText = styled.Text<ButtonTextProps>`
  font-family: ${theme.fonts.bold};
  color: ${({ textColor }) => textColor};
  font-size: 18px;
`;
