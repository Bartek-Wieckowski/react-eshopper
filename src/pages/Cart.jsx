import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useCart();

  if (cart.length < 1) {
    return (
      <main>
        <div className="page-100">
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              go to products
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Breadcrumbs title="cart" />
    </main>
  );
}
