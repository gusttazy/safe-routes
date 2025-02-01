// src/components/Button/index.tsx
import React from 'react';
import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  borderRadius?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  backgroundColor = '#297152',
  textColor = '#fff',
  padding = '15px',
  borderRadius = '5px',
}) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      padding={padding}
      onPress={onPress}
    >
      <ButtonText textColor={textColor}>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
