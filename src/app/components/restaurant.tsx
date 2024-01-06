import Link from "next/link";

import api from "@/api";

const Restaurant = async () => {
  const products = await api.list();

  return (
    <div>
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          return (
            <article key={product.id} className="container_card">
              <img alt={product.name} className="style_img" src={product.image} />

              <Link key={product.id} prefetch href={`/${product.id}`}>
                <div className="container_text">
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
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Restaurant;
