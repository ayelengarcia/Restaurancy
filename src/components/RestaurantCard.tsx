"use client";

import type {Restaurant} from "../app/types";

import Link from "next/link";
import dynamic from "next/dynamic";

import FavoriteButton from "./ButtonFav";

// Creamos un componente dinámico para que no se renderice en el servidor
const DynamicFavoriteButton = dynamic(async () => FavoriteButton, {
  ssr: false,
});

export default function RestaurantCard({restaurant}: {restaurant: Restaurant}) {
  return (
    <article key={restaurant.id} className="container_card">
      <img alt={restaurant.name} className="style_img" src={restaurant.image} />

      <div className="container_text">
        <h2 className="inline-flex gap-2 text-lg font-bold">
          <span>{restaurant.name}</span>
          <small className="inline-flex gap-1">
            <span>⭐</span>
            <span>{restaurant.score}</span>
            <span className="font-normal opacity-75">({restaurant.ratings})</span>
          </small>
          <DynamicFavoriteButton restaurant={restaurant} />
        </h2>
        <Link key={restaurant.id} prefetch href={`/${restaurant.id}`}>
          <p className="opacity-90">{restaurant.description}</p>
        </Link>
      </div>
    </article>
  );
}
