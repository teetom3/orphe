import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducer/cartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartCount: state.cartCount, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
