import React from 'react';
import { View } from 'react-native';
import { useAppContext } from '../AppProvider';
import { MoodItemRow } from '../components/MoodItemRow';

const History: React.FC = () => {
  const appContext = useAppContext();
  return (
    <View>
      {appContext.moodList.map(item => (
        <MoodItemRow key={item.timestamp} item={item} />
      ))}
    </View>
  );
};

export default History;
