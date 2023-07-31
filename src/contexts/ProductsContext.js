import { createContext, useContext, useReducer, useEffect } from "react";

const initialState = {
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {},
};

const ProductsContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "getProductsBegin":
      return { ...state, productsLoading: true };
    case "getProductsSuccess":
      const featuredProducts = action.payload.filter((product) => product.featured === true);
      return { ...state, productsLoading: false, products: action.payload, featuredProducts };
    case "getProductsError":
      return { ...state, productsLoading: false, productsError: true };
    case "getSingleProductBegin":
      return { ...state, singleProductLoading: true, singleProductError: false };
    case "getSingleProductSuccess":
      return { ...state, singleProductLoading: false, singleProduct: action.payload };
    case "getSingleProductError":
      return { ...state, singleProductLoading: false, singleProduct: true };

    default:
      throw new Error("Unknown action type");
  }
}

function ProductsProvider({ children }) {
  const [
    {
      productsLoading,
      productsError,
      products,
      featuredProducts,
      singleProductLoading,
      singleProductError,
      singleProduct,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

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

  async function fetchSingleProduct(url) {
    dispatch({ type: "getSingleProductBegin" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "getSingleProductSuccess", payload: data });
    } catch (error) {
      dispatch({ type: "getSingleProductError" });
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        productsLoading,
        productsError,
        products,
        featuredProducts,
        singleProductLoading,
        singleProductError,
        singleProduct,
        fetchSingleProduct,
      }}
    >
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
