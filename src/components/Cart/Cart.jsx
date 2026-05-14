import { useOutletContext } from "react-router";

import styles from "./Cart.module.css";
import CartCard from "../CartCard/CartCard.jsx";

export default function Cart() {
    const { cart, removeFromCart } = useOutletContext();

    function calculateSubtotal(item) {
        return (item.price * item.quantity).toFixed(2);
    }

    function calculateTotal(cart) {
        return cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0).toFixed(2);
    }

    const isPopulated = cart.length > 0;

    return (
        isPopulated ? (
            <section className={styles.pageContainer}>
                <h3>Your cart</h3>
                <div className={styles.cartContainer}>
                    {cart.map((product) => (
                        <CartCard key={product.id} id={product.id} image={product.image} title={product.title} price={product.price} quantity={product.quantity} subtotal={calculateSubtotal(product)} remove={() => removeFromCart(product.id)} />
                    ))}
                </div>
                <div className={styles.totalContainer}>
                    <p>Total:</p>
                    <p>${calculateTotal(cart)}</p>
                </div>
                <div className={styles.checkoutDiv}>
                    <p>Checkout (unavailable)</p>
                </div>
            </section>
        ) : (
            <section className={styles.pageContainer}>
                <h3>Your cart appears to be empty.</h3>
            </section>
        )
    )
}