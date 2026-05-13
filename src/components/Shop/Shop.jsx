import Card from "../Card/Card.jsx";
import { useOutletContext } from "react-router";

import styles from "./Shop.module.css";

export default function Shop() {
    const { womensData, mensData, jewelryData } = useOutletContext();

    return (
        <section className={styles.content}>
            <h3 className={styles.title}>Women's</h3>
            <div className={styles.container}>
                {womensData.map((data) => (
                    <Card key={data.id} image={data.image} title={data.title} price={data.price} rating={data.rating.rate} count={data.rating.count} />
                ))}
            </div>
            <h3 className={styles.title}>Men's</h3>
            <div className={styles.container}>
                {mensData.map((data) => (
                    <Card key={data.id} image={data.image} title={data.title} price={data.price} rating={data.rating.rate} count={data.rating.count} />
                ))}
            </div>
            <h3 className={styles.title}>Jewelry</h3>
            <div className={styles.container}>
            {jewelryData.map((data) => (
                    <Card key={data.id} image={data.image} title={data.title} price={data.price} rating={data.rating.rate} count={data.rating.count} />
                ))}
            </div>
        </section>
    )
}