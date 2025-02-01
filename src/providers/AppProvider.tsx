import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";

import theme from "../styles/theme";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
      if (fontsLoaded) {
        setIsReady(true);
      }
    };

    prepare();
  }, [fontsLoaded]);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null; // Isso mantém a splash screen até que as fontes sejam carregadas
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
