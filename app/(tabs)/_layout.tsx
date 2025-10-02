import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs       
    screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
      }}>
      <Tabs.Screen name="index" 
                   options={{ 
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                      <AntDesign name="home" size={24} color="black" />
                    ),
                  }}
               />
      <Tabs.Screen name="menuitems" 
                   options={{ 
                      title: 'Menu Items',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="ordered-list" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen name="createmenu" 
                   options={{ 
                      title: 'Create menu',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="form" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
