
import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DATA = [
 {
    id: '1',
    title: 'To Do List',
  },
  {
    id: '2',
    title: 'Morning Routine',
  },
  {
    id: '3',
    title: 'Tootbrush',
  },
  {
    id: '4',
    title: 'drinking water',
  },
  {
    id: '5',
    title: 'Eating breakfast',
  },
  {
    id: '6',
    title: 'drinking milk',
  },
  {
    id: '7',
    title: 'taking bath',
  },
  {
    id: '8',
    title: 'go to school',
  },
  {
    id: '9',
    title: 'Afternoon Routine',
  },
  {
    id: '10',
    title: 'eating lunch',
  },
  {
    id: '11',
    title: 'reading webtoon',
  },
  {
    id: '12',
    title: 'reading manhwa',
  },
  {
    id: '13',
    title: 'watching anime',
  },
  {
    id: '14',
    title: 'watching movie',
  },
  {
    id: '15',
    title: 'watching k-dramas',
  },
  {
    id: '16',
    title: 'sleeping',
  },
  {
    id: '17',
    title: 'eating snacks',
  },
  {
    id: '18',
    title: 'scrolling tiktok',
  },
  {
    id: '19',
    title: 'scrolling fb',
  },
  {
    id: '20',
    title: 'playing games',
  },
  {
    id: '21',
    title: 'calling in discord',
  },
  {
    id: '22',
    title: 'cleaning',
  },
  {
    id: '23',
    title: 'walking at steet',
  },
  {
    id: '24',
    title: 'midnight snacks',
  },
  {
    id: '25',
    title: 'sleeping',
  },
];

const COLORS = ['#f9c2ff', '#a0d5ff', '#c0ffb7', '#ffc6cb', '#ffeda1'];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}> 
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item, index }) => {
    const backgroundColor = item.id === selectedId ? '#a0d5ff' : COLORS[index % COLORS.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;