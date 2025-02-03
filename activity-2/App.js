
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = [
  { id: 'Toothbrush', title: 'To do list' },
  { id: 'Facial wash', title: 'To do list' },
  { id: 'Take a bath', title: 'To do list' },
  { id: 'Breakfast', title: 'To do list' },
  { id: 'Cleaning', title: 'To do list' },
  { id: 'Playing', title: 'To do list' },
  { id: 'Scrolling', title: 'To do list' },
  { id: 'Put food for pepper', title: 'To do list' },
  { id: 'Watering plants', title: 'To do list' },
  { id: 'Tiktok', title: 'morning' },
  { id: 'Do the Math', title: 'morning' },
  { id: 'Packing a bag', title: 'morning' },
  { id: 'Reading', title: 'morning' },
  { id: 'Devotion', title: 'morning' },
  { id: 'Praying', title: 'morning' },
  { id: 'Watching movie', title: 'morning' },
  { id: 'Washing dishes', title: 'morning' },
  { id: 'Eat lunch', title: 'Afternoon' },
  { id: 'Wash Clothes', title: 'Afternoon' },
  { id: 'Spotify', title: 'Afternoon' },
  { id: 'Window shopping online', title: 'Afternoon' },
  { id: 'Play games with siblings', title: 'Afternoon' },
  { id: 'Taking a nap', title: 'Afternoon' },
  { id: 'Eating snacks', title: 'Afternoon' },
  { id: 'Review', title: 'Afternoon' },
  { id: 'Watching movie with fam', title: 'Afternoon' },
];

const Item = ({ title, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handlePress = (item) => {
    const isSelected = selectedItems.includes(item);

    if (isSelected) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleShowSelected = () => {
    if (selectedItems.length === 0) {
      Alert.alert("No items selected", "Please select some items.");
      return;
    }

    Alert.alert(
      "Selected Items",
      selectedItems.join('\n'), // Display selected items in a list
      [{ text: "OK", onPress: () => {} }] // Added an "OK" button for clarity
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.id} onPress={() => handlePress(item.id)} />
          )}
          keyExtractor={item => item.id}
        />

        <TouchableOpacity style={styles.showButton} onPress={handleShowSelected}>
          <Text style={styles.showButtonText}>Show Selected Items</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: '#333',
  },
  showButton: {  // Style for the "Show Selected Items" button
    backgroundColor: 'lightblue',
    padding: 15,
    margin: 16,
    borderRadius: 10,
    alignItems: 'center', // Center the text horizontally
  },
  showButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;