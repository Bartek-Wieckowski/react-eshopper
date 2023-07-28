import "./filters.css";

export default function Filters() {
  return (
    <div className="filters-wrapper">
      <div className="content">
        <form>
          <div className="form-control">
            <input type="text" name="text" className="search-input" />
          </div>
          <div className="form-control">
            <h5>Category</h5>
            <button type="button" name="category">
              All
            </button>
          </div>
          <div className="form-control">
            <h5>Company</h5>
            <select name="company">
              <option value="">c</option>
            </select>
          </div>
          <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
              <button type="button">All</button>
            </div>
          </div>
          <div className="form-control">
            <h5>Price</h5>
            <p className="price">$</p>
            <input type="range" name="price" min="1" max="100" />
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">Free shipping</label>
            <input type="checkbox" name="shipping" />
          </div>
        </form>
        <button type="button" className="clear-btn">Clear filters</button>
      </div>
    </div>
  );
}
