import React, { useState } from "react";
import "../style/singleProducts.scss";
import Rating from "@mui/material/Rating";
import { Product } from "../../../type/type";

import {
  AddShoppingCartOutlined,
  CardTravelOutlined,
  DoneOutline,
  HighlightOff,
  HighlightOffOutlined,
  InfoOutlined,
} from "@mui/icons-material";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { addToCart,removeFromCart } from "../../cart/cartServies/cartSlice";
import { persistor } from "../../../app/store";
type SingleProductsProps = {
  item: Product;
};
const SingleProducts = ({ item }: SingleProductsProps) => {
  const [styleCartIcon, setStyleCartIcon] = React.useState(false);

  // const dataCart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  
  const handleBuy = () => {
    setStyleCartIcon(!styleCartIcon);
    dispatch(addToCart(item))
  };
  const handleremove  = () => {
    setStyleCartIcon(!styleCartIcon);
    dispatch(removeFromCart(item.id))

  };
 
  const animateIcon = styleCartIcon ? "bottom clicked" : "bottom";
  return (
    <div className="wrapper">
      <div className="container">
        <div className="top">
          <img className="imge" src={item.images[0]} alt="" />
        </div>
        <div className={animateIcon}>
          <div className="left">
            <div className="details">
              <h1>{item.title.substring(1, 10)}</h1>
              <p>{item.price}$</p>
              <Rating
                className="rate"
                name="simple-controlled"
                value={item.rating}
                readOnly
              />
            </div>
            <div className="buy" onClick={handleBuy}>
              <i className="material-icons">
                <AddShoppingCartOutlined className="material" />
              </i>
            </div>
          </div>
          <div className="right">
            <div className="done">
              <i className="material-icons">
                <DoneOutline className="material" />
              </i>
            </div>
            <div className="details">
              <h1>{item.title.substring(1, 10)}</h1>
              <p>Added to cart</p>
            </div>
            <div className="remove" onClick={handleremove}>
              <i className="material-icons">
                <HighlightOffOutlined className="material" />
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <i className="material-icons">
            <InfoOutlined className="material" />
          </i>
        </div>
        <div className="contents">
          <h1>Some Information</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
