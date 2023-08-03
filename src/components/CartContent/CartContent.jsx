import { useCart } from '../../contexts/CartContext';
import CartItem from '../CartItem/CartItem';
import './cart-content.css';

export default function CartContent() {
  const { cart } = useCart();
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
    </div>
  );
}
