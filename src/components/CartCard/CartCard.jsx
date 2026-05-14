import styles from "./CartCard.module.css";

export default function CartCard({ image, title, quantity, subtotal, remove }) {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={image} alt="product image" className={styles.image} />
            </div>
            <div className={styles.itemInfoContainer}>
                <p className={styles.title}>{title}</p>
                <p>Quantity: {quantity}</p>
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.total}>Item total: ${subtotal}</p>
                <button aria-label="remove item" type="button" className={styles.remove} onClick={remove}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cd3d3d"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z"/></svg>
                </button>
            </div>
        </div>
    )
}