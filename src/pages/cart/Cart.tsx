import React from "react";
import "./cart.scss";
import SideBar from "../../layouts/sideBar/SideBar";
import NavBar from "../../layouts/navBar/NavBar";
import SubHeader from "../../layouts/subHeader/SubHeader";
import CartItems from "../../features/cart/cartView/CartItems";
import EmptyCartMessage from "../../help/emptymessage/EmptyMessage";
import { useAppSelector } from "../../app/hooks";
const Cart = () => {
  const cartitem = useAppSelector((state) => state.cart.products);
  return (
    <>
      <div className="cart">
        <SideBar />
        <div className="cart__conteiner">
          <NavBar />
          <SubHeader />
          {cartitem.length > 0 ?<CartItems /> : <EmptyCartMessage /> }
        </div>
      </div>
    </>
  );
};

export default Cart;
