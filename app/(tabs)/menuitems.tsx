import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MenuItem } from '../../lib/[types]'
import { useMenu } from '../../context/MenuContext';

export default function MenuItems() {

const { addItem, removeItem, menuItems } = useMenu()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu Items new</Text>

              <FlatList
        data={menuItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemTitle}>
                {item.dishName} - ${item.dishPrice}
              </Text>
              <Text>{item.selectedValue}</Text>
            </View>
            <TouchableOpacity
              onPress={() => removeItem(item.id)}
              style={styles.deleteButton}
            >
              <Text style={styles.deleteText}>✖</Text>
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
});
