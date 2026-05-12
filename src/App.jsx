import Nav from "./components/Nav/Nav.jsx";
import { Outlet } from "react-router";
import { useState, useEffect, useRef } from "react";

import "./App.css";

export default function App() {

  const hasFetched = useRef(false);

  useEffect(() => { // API request for product information
    const fetchData = async () => {
      try {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const allProducts = await fetch('https://fakestoreapi.com/products')
        .then(response => response.json());

        const filterProduct = (allProducts, type) => {
          return allProducts.filter((product) => {
            return product.category === type;
          })
        }

        const womensData = filterProduct(allProducts, "women's clothing");
        const mensData = filterProduct(allProducts, "men's clothing");
        const jewelryData = filterProduct(allProducts, "jewelery");

        console.log(womensData);
        console.log(mensData);
        console.log(jewelryData);

      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  })

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}