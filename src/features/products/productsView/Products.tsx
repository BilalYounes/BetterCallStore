import React, { useState, useEffect } from "react";
import "../style/products.scss";
import SingleProducts from "./SingleProducts";
import { fetchProducts } from "../productsServies/productsSlice";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { Product } from "../../../type/type";
// import Stack from "@mui/material/Stack";
import Sekeltone from "../../../help/Skeleton";

const Products = () => {
  const data = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className="products">
        <div className="grid">
          {!data.loading &&
            data.products.map((item: Product, idx: number) => (
              <div key={item.id}>
                <SingleProducts item={item} />
              </div>
            ))}
          {data.loading && (
            <div className="skelton">
              <Sekeltone />
              <Sekeltone />
              <Sekeltone />
              <Sekeltone />
              <Sekeltone />
              <Sekeltone />
              </div>
              
          )}
        </div>
        
      </div>
      
    </>
  );
};

export default Products;
