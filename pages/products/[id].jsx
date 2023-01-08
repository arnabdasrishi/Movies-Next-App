import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const Product = ({ product }) => {
  console.log(product);
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ textAlign: "center", textAlign: "center" }}>
      <h1>{product.title}</h1>
      <p>by - {product.brand}</p>
      <img src={product.images[1]} alt="prod_img" />
      <h4>{product.description}</h4>
      <h3>
        <s>was $ {product.discountPercentage}</s>
      </h3>
      <h1> $ {product.price}</h1>
      <button
        style={{ fontSize: "20px", padding: "1rem", backgroundColor: "green" }}
      >
        ADD TO WISHLIST
      </button>
    </div>
  );
};

export async function getStaticPaths() {
    let r = await axios.get(`https://dummyjson.com/products`);
    let d = await r.data.products;
    return {
        paths: d.map((product) => ({ params: {id: String(product.id)} })),
        fallback: false, // 
    }
}

export async function getStaticProps(context) {
  let id = context.params.id;
  let r = await axios.get(`https://dummyjson.com/products/${id}`);
  return {
    props: {
      product: r.data,
    },
  };
}

export default Product;
