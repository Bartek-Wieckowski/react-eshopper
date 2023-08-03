import './cart-content.css';
export default function CartContent() {
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
    </div>
  );
}
