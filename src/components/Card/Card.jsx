import styles from "./Card.module.css";

export default function Card({ image, title, price, rating, count }) {
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
                <button type="button" className={styles.button}>
                    -
                </button>
                <label className={styles.offscreen} htmlFor="quantity">quantity</label>
                <input name="quantity" id="quantity" className={styles.input} defaultValue={0}></input>
                <button type="button" className={styles.button}>
                    +
                </button>
            </div>
            <button type="button" className={styles.submitButton}>
                Add to cart
            </button>
        </article>
    )
}