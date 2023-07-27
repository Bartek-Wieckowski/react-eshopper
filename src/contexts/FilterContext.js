import { createContext, useContext, useEffect, useReducer } from "react";
import { useProducts } from "./ProductsContext";

const FilterContext = createContext();

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "loadProducts":
      return { ...state, allProducts: [...action.payload], filteredProducts: [...action.payload] };
    case "setGridView":
      return { ...state, gridView: true };
    case "setListView":
      return { ...state, gridView: false };

    default:
      throw new Error("Unknown action type");
  }
}

function FilterProvider({ children }) {
  const { products } = useProducts();
  const [{ gridView, allProducts, filteredProducts }, dispatch] = useReducer(reducer, initialState);

  useEffect(
    function () {
      dispatch({ type: "loadProducts", payload: products });
    },
    [products]
  );

  function setGridView() {
    dispatch({ type: "setGridView" });
  }
  function setListView() {
    dispatch({ type: "setListView" });
  }

  return (
    <FilterContext.Provider
      value={{ gridView, allProducts, filteredProducts, products, setGridView, setListView }}
    >
      {children}
    </FilterContext.Provider>
  );
}

function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) throw new Error("FilterContext was used outside the FilterProvider");
  return context;
}

export { FilterProvider, useFilter };
