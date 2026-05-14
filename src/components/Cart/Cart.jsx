import { useOutletContext } from "react-router";

import styles from "./Cart.module.css";
import CartCard from "../CartCard/CartCard.jsx";

export default function Cart() {
    const { cart, setCart } = useOutletContext();

    console.log(cart);

    return (
        <section className={styles.pageContainer}>
            <h3>Your cart</h3>
            <div className={styles.cartContainer}>
                {cart.map((product) => (
                    <CartCard key={product.id} id={product.id} image={product.image} title={product.title} price={product.price} quantity={product.quantity} />
                ))}
            </div>
            <div className={styles.totalContainer}>
                <p>Total:</p>
                <p>$129.54</p>
            </div>
            <div className={styles.checkoutDiv}>
                <p>Checkout (unavailable)</p>
            </div>
        </section>
    )
}