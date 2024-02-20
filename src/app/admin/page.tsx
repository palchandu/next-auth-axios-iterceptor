"use client";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import ProductItem from "../component/ProductItem";
export default function Admin() {
  const [allPost, setAllPost] = useState([]);
  console.log("pp", allPost);
  async function fetchProduct() {
    console.log('fetch category')
    try {
      const posts = await axiosInstance.get("/v1/merchant/product");
      console.log("st", posts.status);
      console.log('dt', posts.data);
      if (posts.status === 200) {
        setAllPost(posts.data.data);
      }
      
    } catch (e) {
      console.log("error in fetch products", e);
    }
  }
  function fetchAllCategory() {
    fetchProduct();
 }
  useEffect(() => {
  fetchProduct();
},[])
  return (
    <>
      <div className="flex">
        {allPost.map((item, key) => {
          return (
            <ProductItem
              key={key}
              url={item["images"][0]["desktop_version"]}
              description={item["description"]}
              price={item["price"]}
            />
          );
        })}
      </div>
    </>
  );
}
