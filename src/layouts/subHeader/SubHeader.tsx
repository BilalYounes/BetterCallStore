import { ArrowRightAltOutlined, MoreHorizOutlined } from "@mui/icons-material";
import React from "react";
import "./subheader.scss";
const SubHeader = () => {
  return (
    <>
      <div className="subheader">
        <div className="address">
          <p className="title">All Proudcts</p>
          <p>Home</p>
          <ArrowRightAltOutlined />
          <p>All products</p>
        </div>
        <div className="btnproducts">
          <button className="btn btn--add">+New Products </button>
          <div className="selectbtn">
            <MoreHorizOutlined />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
