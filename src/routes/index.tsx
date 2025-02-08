import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Easing } from "react-native";

// Importação das telas
import Home from "../screens/Home";
import Login from "../screens/Login";

// Tipagem das rotas
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, 
          gestureEnabled: true, 
          animation: "fade", 
          // Configura a transição para a animação de fade
          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                duration: 500,
                easing: Easing.ease,
              },
            },
            close: {
              animation: "timing",
              config: {
                duration: 300,
                easing: Easing.ease,
              },
            },
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
