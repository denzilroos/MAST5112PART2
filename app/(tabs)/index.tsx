import { Text, View,  StyleSheet,FlatList } from 'react-native';
import { Link } from 'expo-router';
import { MenuItem } from '../../lib/[types]'
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from '../../context/MenuContext';
import { useMenu } from '../../context/MenuContext';

export default function Index() {

  const { menuItems } = useMenu();

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuItem}>
      <Text style={styles.itemName}>{item.dishName} — R{item.dishPrice}</Text>
      <Text style={styles.itemCourse}>{item.selectedValue}</Text>
      <Text style={styles.itemDesc}>{item.dishDescript}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MENU</Text>

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
    button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
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
