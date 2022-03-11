import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppProvider } from './AppProvider';
import { BottomTabNavigator } from './Navigator';

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
