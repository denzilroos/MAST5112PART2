import { Text, View, StyleSheet, TextInput,Button } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function CreateMenuScreen() {

          const [dishName, setDishName] = useState('');
          const [dishDescript, setDishDescript] = useState('');
          const [dishPrice, setDishPrice] = useState('');

          const [selectedValue, setSelectedValue] = useState("Course");
          
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Creat Menu Items</Text>
      <Text style={styles.text}>Dish name:</Text>

    <TextInput
            value={dishName}
            onChangeText={setDishName}
            placeholder="Enter text here"
            style={styles.textInput}
          />

      <Text style={styles.text}>Description:</Text>

    <TextInput
            value={dishDescript}
            onChangeText={setDishDescript}
            placeholder="Enter text here"
            style={styles.textInput}
          />

 <Text style={styles.label}>Select a course:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedValue(itemValue)
        }
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="starterCourse" />
        <Picker.Item label="Main" value="mainCourse" />
        <Picker.Item label="Desert" value="desertCourse" />
      </Picker>
      <Text style={styles.selectedText}>Selected: {selectedValue}</Text>

      <Text style={styles.text}>Price:</Text>

    <TextInput
            value={dishPrice}
            onChangeText={setDishPrice}
            placeholder="Enter text here"
            keyboardType='numeric'
            style={styles.textInput}
          />

    <Button
        title='add item'/>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
textInput: {
    padding: 10,
    borderColor: '#000',
    backgroundColor: '#717171ff',
    borderWidth: 1,
    margin: 12,
  },
    label: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    width: '50%',
    height: 50,
    borderColor: '#ccc',
    backgroundColor: '#717171ff',
    borderWidth: 1,
    borderRadius: 5,
  },
  selectedText: {
    color: '#fff',
    marginTop: 20,
    fontSize: 16,
  },
});
