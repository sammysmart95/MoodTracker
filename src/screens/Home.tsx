import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../AppProvider';

const Home: React.FC = () => {
  const appContext = useAppContext();
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <MoodPicker handleSelectMood={appContext.handleSelectMood} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
