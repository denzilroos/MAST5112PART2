import { Text, View, StyleSheet, TextInput,Button,FlatList } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

let nextID = 0

type MenuItem = {
  id: string
  dishName: string
  dishDescript: string
  dishPrice: string
  selectedValue: string
}

export default function CreateMenuScreen() {

          const [dishName, setDishName] = useState('');
          const [dishDescript, setDishDescript] = useState('');
          const [dishPrice, setDishPrice] = useState('');
          const [selectedValue, setSelectedValue] = useState('');
          const menuID = nextID++

          const [menuItems, setMenuItems] = useState<MenuItem[]>([])

          const addMenuItem = () => {
            if (!dishName || !dishDescript || !selectedValue || !dishPrice) {
              alert('Please fill in all fields')
              return
          }

          const newItem : MenuItem = {
            id: menuID.toString(), dishName, dishDescript, selectedValue, dishPrice: parseFloat(dishPrice).toFixed(2)
          }

          setMenuItems(prevItems => [...prevItems,newItem])

          setDishName('')
          setDishDescript('')
          setSelectedValue('')
          setDishPrice('')
        }

          const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuItem}>
      <Text style={styles.itemName}>{item.dishName} — R{item.dishPrice}</Text>
      <Text style={styles.itemCourse}>{item.selectedValue}</Text>
      <Text style={styles.itemDesc}>{item.dishDescript}</Text>
    </View>
  );


        //   const menuItems =[
        //     {title :dishName},
        //     {title :dishDescript},
        //     {title :selectedValue},
        //     {title :dishPrice},
        // ]


          type ItemProps = {title: string};

          const Item = ({title}: ItemProps) => (
            <View style={styles.item}>
              <Text style={styles.title}>{title}</Text>
            </View>
          );

          //const [newMenuItem, setNewMenuItem] = useState([menuItems]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Menu Items</Text>

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
        title='add item'
        onPress={addMenuItem}
        />

    <FlatList
        data={menuItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
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
});
