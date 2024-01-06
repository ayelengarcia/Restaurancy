/* eslint-disable react/button-has-type */
import Link from "next/link";

import api from "@/api";

export async function generateMetadata({params: {id}}: {params: {id: string}}) {
  const product = await api.fetch(id);

  return {
    title: `${product.name} - Restaurancy`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  const products = await api.list();

  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function RestaurantPage({params: {id}}: {params: {id: string}}) {
  const product = await api.fetch(id);

  return (
    <div>
      <div className="contain_btn_back">
        <Link href="/">
          <button className="button_back mb-5"> Back to home</button>
        </Link>
      </div>

      <article key={product.id}>
        <div
          className="img_contain"
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: ".5px",
          }}
        >
          <img alt={product.name} className="style_img" src={product.image} />
        </div>

        <div>
          <h2 className="inline-flex gap-2 text-lg font-bold">
            <span>{product.name}</span>
            <small className="inline-flex gap-1">
              <span>⭐</span>
              <span>{product.ratings}</span>
              <span className="font-normal opacity-75">({product.score})</span>
            </small>
          </h2>
          <p className="opacity-90">{product.description}</p>
        </div>
      </article>
    </div>
  );
}
