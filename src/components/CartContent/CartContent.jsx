import { useCart } from '../../contexts/CartContext';
import CartItem from '../CartItem/CartItem';
import CartTotal from '../CartTotal/CartTotal';
import './cart-content.css';
import { Link } from 'react-router-dom';

export default function CartContent() {
  const { cart, clearCartFunc } = useCart();
  return (
    <div className="section section-center">
      <div className="cart-columns">
        <div className="content">
          <h5>item</h5>
          <h5>price</h5>
          <h5>quantity</h5>
          <h5>subtotal</h5>
          <span></span>
        </div>
        <hr />
      </div>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container-cart">
        <Link to="/products" className="link-btn">
          Continue shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={() => clearCartFunc()}
        >
          Clear shopping cart
        </button>
      </div>
      <CartTotal />
    </div>
  );
}
