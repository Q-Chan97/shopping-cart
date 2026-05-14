import { useState } from "react";

import styles from "./Card.module.css";

export default function Card({ id, image, title, price, rating, count, addToCart }) {
    const [itemQuantity, setItemQuantity] = useState(0);

    function handleInputQuantity(e) {
        e.preventDefault();

        if (/^[0-9]*$/.test(e.target.value)) {
            setItemQuantity(Number(e.target.value));
        }
    }

    function handleButtonQuantity(type, itemQuantity) {
        if (type === "decrease") {
            if (itemQuantity <= 0) return;
            setItemQuantity(itemQuantity - 1);
        }
        if (type === "increase") {
            setItemQuantity(itemQuantity + 1);
        }
    }

    return (
        <article className={styles.cardContainer}>
            <div className={styles.imgContainer}><img className={styles.image} src={image} alt="product image" /></div>
            <div>
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.rating}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
                        <p>{rating}</p>
                    </div>
                    <p>({count})</p>
                </div>
                <p className={styles.price}>${price}</p>
            </div>
            <div className={styles.quantityContainer}>
                <button type="button" className={styles.button} onClick={() => handleButtonQuantity("decrease", itemQuantity)}>
                    -
                </button>
                <label className={styles.offscreen} htmlFor={title + " quantity"}>quantity</label>
                <input name={title + " quantity"} id={title + " quantity"} className={styles.input} value={itemQuantity} onChange={handleInputQuantity}></input>
                <button type="button" className={styles.button} onClick={() => handleButtonQuantity("increase", itemQuantity)}>
                    +
                </button>
            </div>
            <button type="button" 
                    className={styles.submitButton}
                    onClick={() => addToCart({ id, image, title, price, rating, count }, itemQuantity)}>
                Add to cart
            </button>
        </article>
    )
}