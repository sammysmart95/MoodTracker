import React, { useMemo } from 'react';
// import { View, Text } from 'react-native';
import { useAppContext } from '../AppProvider';
import { MoodItemRow } from '../components/MoodItemRow';
import orderBy from 'lodash/orderBy';
import groupBy from 'lodash/groupBy';
import { format } from 'date-fns';
import { FlatList } from 'react-native-gesture-handler';
import { MoodOptionWithTimestamp } from '../types';
import { Drawer } from '../components/Drawer';

export const HistoryTab = () => {
  const { moodList } = useAppContext();

  const days = useMemo(() => {
    const ordered = orderBy(moodList, 'timestamp', 'desc');

    const grouped = groupBy(ordered, item =>
      format(new Date(item.timestamp), 'dd MMM, yyyy'),
    );

    return Object.entries(grouped).map(([day, moodsInDay]) => ({
      day,
      moodsInDay,
    }));
  }, [moodList]);

  return (
    <FlatList
      keyExtractor={item => item.day}
      data={days}
      renderItem={({ item }) => (
        <Drawer title={item.day}>
          {item.moodsInDay.map((mood: MoodOptionWithTimestamp) => (
            <MoodItemRow item={mood} key={mood.timestamp} />
          ))}
        </Drawer>
      )}
    />
  );
};
