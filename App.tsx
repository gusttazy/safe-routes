import React from 'react';
import { AppProvider } from './src/providers/AppProvider';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

export default function App() {
  return (
    <AppProvider>
      <Login />
    </AppProvider>
  );
};
