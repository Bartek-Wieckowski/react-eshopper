import { createContext, useContext } from "react";

function getLocalStorage() {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.stringify(localStorage.getItem("cart"));
  } else {
    return [];
  }
}

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  shippingFree: 534,
};

const CartContext = createContext();

function CartProvider({ children }) {
  return <CartProvider.Provider>{children}</CartProvider.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("CartContext was used outside the CartProvider");
  }
  return context;
}
export { CartProvider, useCart };
