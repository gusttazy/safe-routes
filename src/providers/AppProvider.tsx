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

SplashScreen.preventAutoHideAsync();

export function AppProvider({ children }: AppProviderProps) {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!isReady) {
    return null; // Mantém a splash screen até que tudo esteja pronto
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
