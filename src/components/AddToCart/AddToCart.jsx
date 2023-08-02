import "./add-to-cart.css";

export default function AddToCart({ product }) {
  const { id, stock, colors } = product;
  return <div className="addtocart-wrapper">
    <div className="colors">
        <span>colors: </span>
        <div>
            {colors.map((color,index) => <button key={index} style={{background: color}} className="color-btn"></button>)}
        </div>
    </div>
  </div>;
}
