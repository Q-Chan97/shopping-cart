import Card from "../Card/Card.jsx";

import styles from "./Shop.module.css";

export default function Shop() {
    return (
        <section className={styles.content}>
            <h3 className={styles.title}>Women's</h3>
            <div className={styles.container}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <h3 className={styles.title}>Men's</h3>
            <div className={styles.container}>
                <Card />
                <Card />
                <Card />
            </div>
            <h3 className={styles.title}>Jewelry</h3>
            <div className={styles.container}>
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}