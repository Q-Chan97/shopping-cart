import Nav from "./components/Nav/Nav.jsx";
import { Outlet } from "react-router";
import { useState, useEffect, useRef } from "react";

import "./App.css";

export default function App() {
  const [womensShopData, setWomensShopData] = useState([]);
  const [mensShopData, setMensShopData] = useState([]);
  const [jewelryShopData, setJewelryShopData] = useState([]);

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

        const filterWomens = filterProduct(allProducts, "women's clothing");
        const filterMens = filterProduct(allProducts, "men's clothing");
        const filterJewelry = filterProduct(allProducts, "jewelery");

        console.log(filterWomens);

        setWomensShopData(filterWomens);
        setMensShopData(filterMens);
        setJewelryShopData(filterJewelry);

      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [])

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet context={{ womensData: womensShopData, mensData: mensShopData, jewelryData: jewelryShopData }} />
      </main>
    </div>
  )
}