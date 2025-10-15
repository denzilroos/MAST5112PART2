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

  const addItem = (item: MenuItem) => {
    setMenuItems(prev => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  }

  return (
    <MenuContext.Provider value={{ menuItems, addItem, removeItem }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used inside a MenuProvider');
  }
  return context;
};
