import { createContext, useContext, useEffect, useReducer } from 'react';

function getLocalStorage() {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
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

function reducer(state, action) {
  switch (action.type) {
    case 'addToCart':
      const { id, color, amount, product } = action.payload;
      const tempItem = state.cart.find(
        (cartItem) => cartItem.id === id + color
      );
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    case 'removeCartItem':
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: tempCart };
    case 'countCartTotals':
      const { totalItems, totalAmount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.totalItems += amount;
          total.totalAmount += price * amount;
          return total;
        },
        { totalAmount: 0, totalItems: 0 }
      );
      return { ...state, totalAmount, totalItems };
    default:
      throw new Error('Unknown action type');
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addToCartFunc(id, color, amount, product) {
    dispatch({ type: 'addToCart', payload: { id, color, amount, product } });
  }
  function removeCartItemFunc(id) {
    dispatch({ type: 'removeCartItem', payload: id });
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    dispatch({ type: 'countCartTotals' });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCartFunc, removeCartItemFunc }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('CartContext was used outside the CartProvider');
  }
  return context;
}
export { CartProvider, useCart };
