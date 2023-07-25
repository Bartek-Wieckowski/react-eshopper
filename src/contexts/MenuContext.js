import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

function MenuContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  }

  return <MenuContext.Provider value={{ openMenu, closeMenu, isMenuOpen }}>{children}</MenuContext.Provider>;
}
function useMenuContext() {
  const context = useContext(MenuContext);
  if (context === undefined) throw new Error("MenuContext was used outside MenuContextProvider");
  return context;
}

export { MenuContextProvider, useMenuContext };
