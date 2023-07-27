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
    case "updateSort":
      return { ...state, sort: action.payload };
    case "sortProducts":
      const { sort, filteredProducts } = state;
      let tempProducts = [...filteredProducts];
      if (sort === "price-lowest") {
        tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (sort === "name-z") {
        tempProducts.sort((a, b) => b.name.localeCompare(a.name));
      }
      return { ...state, filteredProducts: tempProducts };

    default:
      throw new Error("Unknown action type");
  }
}

function FilterProvider({ children }) {
  const { products } = useProducts();
  const [{ gridView, allProducts, filteredProducts, sort }, dispatch] = useReducer(reducer, initialState);

  useEffect(
    function () {
      dispatch({ type: "loadProducts", payload: products });
    },
    [products]
  );

  useEffect(
    function () {
      dispatch({ type: "sortProducts" });
    },
    [sort]
  );

  function setGridView() {
    dispatch({ type: "setGridView" });
  }

  function setListView() {
    dispatch({ type: "setListView" });
  }

  function updateSort(e) {
    const value = e.target.value;
    dispatch({ type: "updateSort", payload: value });
  }

  return (
    <FilterContext.Provider
      value={{
        gridView,
        allProducts,
        filteredProducts,
        products,
        setGridView,
        setListView,
        updateSort,
        sort,
      }}
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
