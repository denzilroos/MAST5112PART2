import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MenuProvider } from '../../context/MenuContext';

export default function TabLayout() {

  return (
    <MenuProvider>
    <Tabs       
    screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
      }}>
      <Tabs.Screen name="index" //home screen for displaying menu items, the amount of items and average prices of courses
                   options={{ 
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                      <AntDesign name="home" size={24} color="black" />
                    ),
                  }}
               />
      <Tabs.Screen name="menuitems" // screen for displaying menu items by selecting a course 
                   options={{ 
                      title: 'Menu Items',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="ordered-list" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen name="createmenu" //screen for creating menu items by adding the item details and displaying them in a list with a remove button to remove the item
                   options={{ 
                      title: 'Create menu',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="form" size={24} color="black" />
            
          ),
        }}
      />
    </Tabs>
    </MenuProvider>
  );
}
