import { useState } from "react";
import "./add-to-cart.css";
import AmountBtns from "../AmountBtns/AmountBtns";
import { Link } from "react-router-dom";

export default function AddToCart({ product }) {
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(0);

  function increase() {
    setAmount((oldAmount) => Math.min(oldAmount + 1, stock));
  }
  function decrease() {
    setAmount((oldAmount) => Math.max(oldAmount - 1, 0));
  }
  return (
    <div className="addtocart-wrapper">
      <div className="colors">
        <span>colors: </span>
        <div>
          {colors.map((color, index) => (
            <button
              key={index}
              style={{ background: color }}
              className={`${mainColor === color ? "color-btn active" : "color-btn"}`}
              onClick={() => setMainColor(color)}
            >
              {mainColor === color ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#fff"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              ) : null}
            </button>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <AmountBtns inc={increase} dec={decrease} amount={amount} />
        <Link to="/cart" className="btn">
          add to cart
        </Link>
      </div>
    </div>
  );
}
