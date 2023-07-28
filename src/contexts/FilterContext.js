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
      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      };

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

    case "updateFilters":
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };

    case "filterProducts":
      const { allProducts } = state;
      const { text, category, company, color, price, shipping } = state.filters;
      let tempProductsFilter = [...allProducts];
      if (text) {
        tempProductsFilter = tempProductsFilter.filter((product) =>
          product.name.toLowerCase().startsWith(text)
        );
      }
      if (category !== "all") {
        tempProductsFilter = tempProductsFilter.filter((product) => product.category === category);
      }
      if (company !== "all") {
        tempProductsFilter = tempProductsFilter.filter((product) => product.company === company);
      }
      if (color !== "all") {
        tempProductsFilter = tempProductsFilter.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }
      tempProductsFilter = tempProductsFilter.filter((product) => product.price <= price);
      if (shipping) {
        tempProductsFilter = tempProductsFilter.filter((product) => product.shipping === true);
      }
      return { ...state, filteredProducts: tempProductsFilter };

    case "clearFilters":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.maxPrice,
          shipping: false,
        },
      };

    default:
      throw new Error("Unknown action type");
  }
}

function FilterProvider({ children }) {
  const { products } = useProducts();
  const [{ gridView, allProducts, filteredProducts, sort, filters }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(
    function () {
      dispatch({ type: "loadProducts", payload: products });
    },
    [products]
  );

  useEffect(
    function () {
      dispatch({ type: "filterProducts" });
      dispatch({ type: "sortProducts" });
    },
    [sort, filters]
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

  function updateFilters(e) {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: "updateFilters", payload: { name, value } });
  }

  function clearFilters() {
    dispatch({ type: "clearFilters" });
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
        filters,
        updateFilters,
        clearFilters,
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
