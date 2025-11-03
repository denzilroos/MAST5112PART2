import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem } from '../lib/[types]'

type MenuContextType = {
  menuItems: MenuItem[]
  addItem: (item: MenuItem) => void
  removeItem: (id: string) => void
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  //function for adding menu items to an array
  const addItem = (item: MenuItem) => {
    setMenuItems(prev => [...prev, item]);
  };

   //function for removing menu items to an array
  const removeItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  }

  return (
    <MenuContext.Provider value={{ menuItems, addItem, removeItem }}>
      {children}
    </MenuContext.Provider>
  );
};

//export useMenu to MenuContext to be used across screens
export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used inside a MenuProvider');
  }
  return context;
};
