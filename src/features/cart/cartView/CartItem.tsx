import { Add, DeleteOutlineOutlined, Remove } from "@mui/icons-material";
import React, { useState } from "react";
import "../style/cartitem.scss";
import { propCartItem } from "../../../type/type";
import { ButtonGroup } from "@mui/material";
import { addToCart, removeFromCart } from "../cartServies/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
type propItem = {
  item: propCartItem;
};
const CartItem = ({ item }: propItem) => {
  const dispatch = useAppDispatch();
  const [shrink, setshrink] = useState('');
  const handleAdd = () => {
    dispatch(addToCart(item.product));
  };
  const handleremove = () => {
    if (item.quantity > 1) {
      dispatch(removeFromCart(item.product.id));
    } else {
      setshrink('shrink');
      setTimeout(() => {
        dispatch(removeFromCart(item.product.id));
        setshrink('');

      }, 500);
    }
  };
  return (
    <>
      <div className={`product ${shrink}`}>
        <div className="removeicon">
          <DeleteOutlineOutlined className="material" onClick={handleremove}/>
        </div>
        <div className="productdetails">
          <img src={item.product.images[0]} />
          <div className="details">
            <span className="span">
              <b>Brand: </b>
              {item.product.brand}
            </span>
            <span className="span">
              <b>Name: </b>
              {item.product.title}
            </span>
            <span className="span">
              <b>Category:</b> {item.product.category}
            </span>
            <div className="color">
              <div className="productcolor"></div>
              <div className="productcolor3"></div>

              <div className="productcolor2" />
            </div>
          </div>
        </div>
        <div className="pricedetails">
          <ButtonGroup size="small" aria-label="small outlined button group">
            <div className="productamountcontiner">
              <Add className="material--add" onClick={handleAdd}>
                +
              </Add>
              <div className="productamount">{item.quantity}</div>
              <Remove className="material--remove" onClick={handleremove}>
                -
              </Remove>
            </div>
          </ButtonGroup>

          <div className="productprice">{item.product.price}$</div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
