import { Text, View,  StyleSheet,FlatList, Image, ImageBackground } from 'react-native';
import { MenuItem } from '../../lib/[types]'
import React, { useState, useMemo } from 'react';

import { useMenu } from '../../context/MenuContext';


export default function Index() {

  const { menuItems } = useMenu();

  const toNumber = (value: string) => {
  const n = parseFloat(value);
  return isNaN(n) ? 0 : n;
};
  
  let numberOfItems= menuItems.length.toString()

    const averageByCourse = useMemo(() => {
    const courses = ['starter', 'main', 'dessert'];
    const averages: Record<string, number> = {};

    for (const course of courses) {
      const filtered = menuItems.filter(
        item => item.selectedValue.toLowerCase() === course
      );
      if (filtered.length > 0) {
        const total = filtered.reduce((sum, item) => sum + item.priceNum, 0);
        averages[course] = total / filtered.length;
      } else {
        averages[course] = 0;
      }
    }

    return averages;
  }, [menuItems])

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuItem}>
      <Text style={styles.itemName}>{item.dishName} — R{item.dishPrice}</Text>
      <Text style={styles.itemCourse}>{item.selectedValue}</Text>
      <Text style={styles.itemDesc}>{item.dishDescript}</Text>
    </View>
  )

  return (
   <ImageBackground
  source={require('../../assets/menubackground.jpg')}
  style={{ flex: 1, padding: 16 }}
  resizeMode="cover"
> 
<View style={styles.container}>


     
      <Image
        source={require('../../assets/menuheaderimg.png')} 
        style={styles.headerImage}
        resizeMode="contain"
      /> 
 

       <Text style={styles.title}>Menu Overview</Text>
       <Text style={styles.text}>Total number of menu items = {numberOfItems}</Text>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Average Price by Course</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryItem}>
            Starter:{' '}
            {averageByCourse.starter
              ? `R${averageByCourse.starter.toFixed(2)}`
              : 'N/A'}
          </Text>
          <Text style={styles.summaryItem}>
            Main:{' '}
            {averageByCourse.main
              ? `R${averageByCourse.main.toFixed(2)}`
              : 'N/A'}
          </Text>
          <Text style={styles.summaryItem}>
            Dessert:{' '}
            {averageByCourse.dessert
              ? `R${averageByCourse.dessert.toFixed(2)}`
              : 'N/A'}
          </Text>
        </View>
      </View>

            <Text style={styles.heading}>MENU</Text>

      <FlatList
          data={menuItems}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      
    </View>
    </ImageBackground>
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
    heading: {
    color: '#fff',
    fontSize : 36,
  },
    button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
      menuItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
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
    summaryTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 6 },
  summaryRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  summaryItem: { fontSize: 14, color: '#007bff', fontWeight: '600' },
  item: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 8,
  },
  itemTitle: { fontWeight: 'bold' },
    summaryContainer: {
    backgroundColor: '#eef6ff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: { 
    color: '#fff',
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
   headerImage: {
    width: '100%',
    height: 120,
    marginBottom: 10,
  },

});
