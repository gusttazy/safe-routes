import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface ButtonProps {
  backgroundColor: string;
  borderRadius: string;
  padding: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const ButtonText = styled.Text<{ textColor: string }>`
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.background};
  font-size: 18px;
`;
