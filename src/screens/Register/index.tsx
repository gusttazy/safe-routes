import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  SafeContainer,
  CardContainer,
  Title,
  SubTitle,
  DontHaveAccount,
  RegisterText,
  InputContainer,
} from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleRegister = () => console.log("Cadastro pressionado");
  const handleBack = () => navigation.goBack();

  return (
    <SafeContainer>
      <TouchableOpacity
        onPress={handleBack}
        style={{ position: "absolute", top: 60, left: 20, zIndex: 10 }}
      >
        <Ionicons name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <CardContainer>
        <Title>Cadastre-se</Title>
        <SubTitle>Preencha as informações abaixo</SubTitle>
        <InputContainer>
          <Input label="Nome" value={firstName} onChangeText={setFirstName} />
        </InputContainer>
        <InputContainer>
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </InputContainer>
        <InputContainer>
          <Input
            label="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </InputContainer>
        <InputContainer>
          <Input
            label="Confirmar Senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </InputContainer>
        <View>
          <Button title="Cadastrar" onPress={handleRegister} />
        </View>
        <DontHaveAccount>
          Já possui uma conta?{" "}
          <RegisterText onPress={() => navigation.navigate("Login")}>
            Entrar
          </RegisterText>
        </DontHaveAccount>
      </CardContainer>
    </SafeContainer>
  );
};

export default Register;
