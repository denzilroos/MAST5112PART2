import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useMenu } from '../../context/MenuContext';
import React, { useState } from 'react';

export default function MenuItems() {

  const { menuItems } = useMenu();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courses = ['starter', 'main', 'dessert'];

  //filter menu items by selected course
    const filteredItems =
    selectedCourse === null
      ? []
      : menuItems.filter(
          item => item.selectedValue.toLowerCase() === selectedCourse.toLowerCase()
        );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Items</Text>

      <View style={styles.courseButtons}>
        {courses.map(course => (
          <TouchableOpacity
            key={course}
            style={[
              styles.button,
              selectedCourse === course && styles.selectedButton,
            ]}
            onPress={() =>
              setSelectedCourse(prev => (prev === course ? null : course))
            }
          >
            <Text
              style={[
                styles.buttonText,
                selectedCourse === course && styles.selectedButtonText,
              ]}
            >
              {course.charAt(0).toUpperCase() + course.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedCourse === null ? (
        <Text style={styles.infoText}>Select a course to view its menu items.</Text>
      ) : filteredItems.length === 0 ? (
        <Text style={styles.infoText}>
          No items found for "{selectedCourse}".
        </Text>
      ) : (
        <FlatList
          data={filteredItems}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemTitle}>
                {item.dishName} - ${item.priceNum.toFixed(2)}
              </Text>
              <Text>{item.dishDescript}</Text>
            </View>
          )}
        />
      )}

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
  },
     item: {
    
    backgroundColor: '#646464ff',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
  },
    title: { 
    color: '#fff',
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 10 

  },
   button: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  selectedButton: { backgroundColor: '#007bff' },
  buttonText: { fontSize: 16 },
  selectedButtonText: { color: 'white', fontWeight: 'bold' },
  infoText: { textAlign: 'center', color: '#666', marginTop: 20 
  },
  courseButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },

});
