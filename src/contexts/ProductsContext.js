import { createContext, useContext, useReducer } from "react";

const initialState = {
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
};

const ProductsContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "getProductsBegin":
      return { ...state, productsLoading: true };
    case "getProductsSuccess":
      return { ...state, productsLoading: false, products: action.payload, featuredProducts };
    case "getProductsError":
      return { ...state, productsLoading: false, productsError: true };

    default:
      throw new Error("Unknown action type");
  }
}

function ProductsProvider({ children }) {
  const [{ productsLoading, productsError, products, featuredProducts }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchProducts() {
      dispatch({ type: "getProductsBegin" });
      try {
        const res = await fetch(`https://course-api.com/react-store-products`);
        const data = await res.json();
        dispatch({ type: "getProductsSuccess", payload: data });
      } catch (error) {
        dispatch({ type: "getProductsError" });
      }
    }
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ productsLoading, productsError, products, featuredProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined) throw new Error("ProductssContext was used outside the ProductsProvider");
  return context;
}

export { ProductsProvider, useProducts };
