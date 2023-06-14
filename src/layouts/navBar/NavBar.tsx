import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { ShoppingCartRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
const NavBar = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartItem = useAppSelector((state) => state.cart.products);
  const animateIconCart = btnIsHighlighted ? "btncarte" : "btncarte bump";
  useEffect(() => {
    if (cartItem.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartItem]);
  return (
    <div className="Nav">
      <div className="Nav__wrapper">
        <div className="search">
          <input type="text" placeholder="Serach ..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <div className="name">
              <p> Welcome</p>
              <p style={{ color: "indigo" }}>!Ahmad</p>

              <p className="logout">log out</p>
            </div>
          </div>
          <Link to={"Register"}>
          <div className="item">
            <img
              className="avatar"
              src="data:image/jpeg;base64,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"
              alt="Real chad"
            />
          </div>
          </Link>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <Link to={"/cart"}>
            {/* <div className={animateIconCart}>
            {cartItem.length>0 ? <div className="counter">{cartItem.length}</div>: <></> }
       
          </div> */}
            <button className={animateIconCart}>
              <span className='iconcart'>
                <ShoppingCartRounded />
              </span>
              <span>Your Cart</span>
              <span className='badge'>{cartItem.length}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
