import axios from "axios";
import Link from "next/link";
import React from "react";

const Products = ({ prods }) => {
  //   console.log(prods);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          marginTop: "2rem",
        }}
      >
        {prods.map((items) => (
          <Link key={items.id} href={`products/${items.id}`}>
            <div>
              <h3>{items.title}</h3>
              <img src={items.images[0]} alt="" width="250px" />
              <p>{items.description}</p>
              <p>
                <s> ${items.discountPercentage}</s>
              </p>
              <h4>Now on: $ {items.price}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  let r = await axios.get(`https://dummyjson.com/products`);
  return {
    props: {
      prods: r.data.products,
    },
  };
}
export default Products;
