import React, { useState } from 'react';
import { StyleSheet, Text, View, SectionList, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = [
  {
    title: '🌅 Morning',
    data: ['Toothbrush', 'Drink Water', 'Breakfast', 'Drink Milk', 'Take Bath', 'Go To School', 'Exercise', 'Make Up'],
  },
  {
    title: '☀️ Afternoon',
    data: ['Lunch', 'Reading Webtoon', 'Reading Manhwa', 'Watch Movie', 'Taking Bath', 'Scrolling Facebook', 'Washing Dishes', 'Walking'],
  },
  {
    title: '🌙 Evening',
    data: ['Toothbrush', 'Drink Water', 'Scrolling TikTok', 'Playing Games', 'Cleaning', 'Praying', 'Eating', 'Reviewing'],
  },
];

// Aesthetic pastel color palette
const COLORS = ['#FFD6E0', '#FFC6AC', '#FFF2B2', '#C7E9B0', '#B5EAEA', '#C7CEEA', '#E1AFD1', '#FFC8A2'];

const App = () => {
  const [status, setStatus] = useState({});
  const doneCount = Object.values(status).filter(value => value === 'done').length;
  const undoneCount = Object.values(status).filter(value => value === 'undone').length;

  const toggleStatus = (item) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [item]: prevStatus[item] === 'done' ? 'undone' : 'done',
    }));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <Text style={styles.header1}>🌸 Hazel's TO-DO List 🌸</Text>
        <Text style={styles.counter}>✅ Done: {doneCount} ❌ Undone: {undoneCount}</Text>

        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item, index }) => (
            <View style={[styles.item, { backgroundColor: COLORS[index % COLORS.length] }]}>
              <Text style={styles.title}>{item}</Text>
              <TouchableOpacity
                style={[styles.button, status[item] === 'done' ? styles.doneButton : styles.undoneButton]}
                onPress={() => toggleStatus(item)}
              >
                <Text style={styles.buttonText}>{status[item] === 'done' ? '✅' : '❌'}</Text>
              </TouchableOpacity>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    backgroundColor: '#FDF6EC', 
  },
  item: {
    flexDirection: 'row',
    padding: 30,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    elevation: 2, 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  header: {
    padding: 9,
    fontSize: 22,
    backgroundColor: '#E5E5E5',
    textAlign: 'left',
    fontWeight: 'bold',
    borderRadius: 8,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  header1: {
    padding: 30,
    marginBottom: 20,
    fontSize: 28,
    backgroundColor: '#FFE1E1',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 8,
    elevation: 2,
  },
  counter: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    borderRadius: 17,
  },
  doneButton: {
    backgroundColor: '#4CAF50',
  },
  undoneButton: {
    backgroundColor: '#D32F2F',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default App;
