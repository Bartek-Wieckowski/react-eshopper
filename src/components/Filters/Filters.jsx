import { useFilter } from "../../contexts/FilterContext";
import { formatPrice, getUniqueValues } from "../../utils/helpers";
import "./filters.css";

export default function Filters() {
  const {
    filters: { text, category, company, color, minPrice, maxPrice, price, shipping },
    updateFilters,
    allProducts,
    clearFilters
  } = useFilter();

  const categories = getUniqueValues(allProducts, "category");
  const companies = getUniqueValues(allProducts, "company");
  const colors = getUniqueValues(allProducts, "colors");

  return (
    <div className="filters-wrapper">
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              value={text}
              onChange={updateFilters}
              placeholder="search"
              className="search-input"
            />
          </div>
          <div className="form-control">
            <h5>Category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    type="button"
                    name="category"
                    key={index}
                    onClick={updateFilters}
                    className={`${category === c.toLowerCase() ? "active" : null}`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Company</h5>
            <select name="company" value={company} onChange={updateFilters} className="company">
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      type="button"
                      name="color"
                      data-color="all"
                      key={index}
                      onClick={updateFilters}
                      className={`${color === "all" ? "all-btn active" : "all-btn"}`}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    type="button"
                    name="color"
                    style={{backgroundColor: c}}
                    data-color={c}
                    key={index}
                    onClick={updateFilters}
                    className={`${color === c ? "color-btn active-clr" : "color-btn"}`}
                  >
                    {color === c ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="#fff"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={updateFilters} />
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">Free shipping</label>
            <input type="checkbox" name="shipping" id="shipping" checked={shipping} onChange={updateFilters} />
          </div>
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          Clear filters
        </button>
      </div>
    </div>
  );
}
