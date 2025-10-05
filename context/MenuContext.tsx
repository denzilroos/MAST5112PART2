import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem } from '../lib/[types]'

// 📝 Define what data & functions our context will provide to components
type MenuContextType = {
  menuItems: MenuItem[];
  addItem: (item: MenuItem) => void;
};

// 📝 Create the actual context object
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// 📝 This provider wraps the app and provides menu state to children
export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  // Function to add a new item to the menu list
  const addItem = (item: MenuItem) => {
    setMenuItems(prev => [...prev, item]);
  };

  return (
    <MenuContext.Provider value={{ menuItems, addItem }}>
      {children}
    </MenuContext.Provider>
  );
};

// 📝 Custom hook so we can easily access context anywhere
export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used inside a MenuProvider');
  }
  return context;
};
