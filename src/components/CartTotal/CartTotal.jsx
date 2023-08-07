import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../utils/helpers';
import './cart-total.css';

export default function CartTotal() {
  const { totalAmount, shippingFee } = useCart();
  return (
    <div class="cart-total-wrapper">
      <div className="box">
        <h5>
          subtotal :<span>{formatPrice(totalAmount)}</span>
        </h5>
        <p>
          shipping fee :<span>{formatPrice(shippingFee)}</span>
        </p>
        <hr />
        <h4>
          order total :<span>{formatPrice(totalAmount + shippingFee)}</span>
        </h4>
      </div>
    </div>
  );
}
