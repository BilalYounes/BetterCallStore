import React from "react";
import "../style/cartitems.scss";
import { useAppSelector,useAppDispatch } from "../../../app/hooks";
import { propCartItem, Product } from "../../../type/type";
import CartItem from "./CartItem";
import {resetCart} from '../cartServies/cartSlice'
const CartItems = () => {
const data = useAppSelector((state)=>state.cart)
const dispatch = useAppDispatch()
const handelRest = ()=>{
  dispatch(resetCart())
}
  return (
    <div className="carte">
      <div className="cart__wrapper">
        
        <div className="cart__bottom">
          <div className="info">
         { data.products.map((item: propCartItem, idx: number) => (
              <div key={item.product.id}>
                <CartItem item={item} />
              </div>
            ))}
          </div>
          <div className="summary">
            <h1 className="summarytitle">ORDER SUMMARY</h1>
            <div className="summaryitem">
              <span>All We Take</span>
              <span>14%</span>
            </div>
            <div className="summaryitem">
              <span>Price </span>
              <span>{data.totalPrice}</span>
            </div>

            <div className="summaryitem">
              <span>Tax</span>
              <span>{data.tax}</span>
            </div>

            {/* <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>{totalPrice}</SummaryItemPrice>
          </SummaryItem> */}
            <button onClick={handelRest} className="btn btn--check">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
