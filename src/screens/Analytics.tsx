import React from 'react';
import { View, Text } from 'react-native';
import { useAppContext } from '../AppProvider';

const Analytics: React.FC = () => {
  const appContext = useAppContext();

  return (
    <View>
      <Text>{appContext.greeting}</Text>
    </View>
  );
};

export default Analytics;
