import React from 'react';
import { AppProvider } from './src/providers/AppProvider';
import Home from './src/screens/Home';

export default function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};
