import { Text,TouchableOpacity, View, StyleSheet, TextInput,Button,FlatList } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { MenuItem } from '../../lib/[types]'
import { useMenu } from '../../context/MenuContext';


export default function CreateMenuScreen() {

          const { addItem, removeItem, menuItems } = useMenu()

          const [dishName, setDishName] = useState('');
          const [dishDescript, setDishDescript] = useState('');
          const [dishPrice, setDishPrice] = useState('');
          const [selectedValue, setSelectedValue] = useState<string>('');

          const addMenuItem = () => {
            if (!dishName || !dishDescript || !selectedValue || !dishPrice) {
              alert('Please fill in all fields')
              return
          }

          const newItem : MenuItem = {
           id: Date.now().toString(), 
           dishName, 
           dishDescript, 
           selectedValue, 
           dishPrice,
           priceNum: parseFloat(dishPrice)
          }

          addItem(newItem)
          setDishName('')
          setDishDescript('')
          setSelectedValue('')
          setDishPrice('')
          alert('Menu item added!')
        }


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Menu Items</Text>

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

 <Text style={styles.text}>Select a course:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedValue(itemValue)
        }
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="starter" />
        <Picker.Item label="Main" value="main" />
        <Picker.Item label="Dessert" value="dessert" />
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
        title='add item'
        onPress={addMenuItem}
        color="#841584"
        />

              <FlatList
        data={menuItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemTitle}>
                {item.dishName} - R{item.dishPrice}
              </Text>
              <Text>{item.dishDescript}</Text>
              <Text>{item.selectedValue}</Text>
            </View>
            <TouchableOpacity
              onPress={() => removeItem(item.id)}
              style={styles.deleteButton}
            >
              <Text style={styles.deleteText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
    heading: {
    color: '#fff',
    fontSize: 36,
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
    item: {
    
    backgroundColor: '#646464ff',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
    menuItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemCourse: {
    color: '#888',
    fontStyle: 'italic',
  },
  itemDesc: {
    marginTop: 5,
    color: '#555',
  },
  list: {
    paddingBottom: 20,
  },
  deleteText: { color: '#fff', fontWeight: 'bold'
  },
  itemTitle: { fontWeight: 'bold' },
  deleteButton: {
    marginLeft: 10,
    backgroundColor: '#ff4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  }
});
