import Image from "next/image";
import React from "react";

const ProductItem = ( props:any) => {
  return (
    <div className="mx-5 my-3 max-w-52 rounded-lg text-white px-4 bg-indigo-500">
      <img alt="product image " src={props.url}  />
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default ProductItem;
