import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { MoodOption } from '../types';
import { theme } from '../theme';

const moodOptions: MoodOption[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

type MoodPickerProps = {
  onAddMood: (moodOption: MoodOption) => void;
};

export const MoodPicker: React.FC<MoodPickerProps> = ({ onAddMood }) => {
  const [selectedOption, setSelectedOption] = useState<MoodOption>();
  const [selectedMood, setSelectedMood] = useState<MoodOption>();
  const [hasAdded, setHasAdded] = useState(false);

  const handleAddMood = React.useCallback(() => {
    if (selectedOption) {
      setHasAdded(true);
      onAddMood(selectedOption);
      setSelectedOption(undefined);
    }
  }, [onAddMood, selectedOption]);

  if (hasAdded) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Thank you!</Text>
        <Pressable style={styles.button} onPress={() => setHasAdded(false)}>
          <Text style={styles.buttonText}>Add another</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you right now?</Text>
      <View style={styles.moodList}>
        {moodOptions.map(option => (
          <View key={option.emoji}>
            <Pressable
              onPress={() => setSelectedMood(option)}
              style={[
                styles.moodItem,
                option.emoji === selectedMood?.emoji
                  ? styles.selectedMoodItem
                  : undefined,
              ]}>
              <Text style={styles.moodText}>{option.emoji}</Text>
            </Pressable>
            <Text style={styles.descriptionText}>
              {selectedMood?.emoji === option.emoji ? option.description : ' '}
            </Text>
          </View>
        ))}
      </View>
      <Pressable style={styles.button} onPress={handleAddMood}>
        <Text style={styles.buttonText}>Choose</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: theme.colorPurple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
  },
  moodText: {
    fontSize: 24,
  },
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: theme.colorPurple,
    borderColor: theme.colorWhite,
  },
  description: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    color: '#454C73',
  },
  descriptionText: {
    color: theme.colorPurple,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#454C73',
    marginBottom: 10,
    // fontFamily: 'Kalam-Bold',
  },
  button: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
