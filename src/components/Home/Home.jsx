import styles from "./Home.module.css";


export default function Home() {
    return (
        <section>
            <article className={styles.heroContainer}>
                <p className={styles.heroText}>Attention-Grabbing Text</p>
                <div className={styles.imageContainer}>
                    <div className={styles.vignette}></div>
                    <picture>
                        <source media="(width < 600px)" srcSet="/src/assets/images/hero-image-mobile.jpg"/>
                        <source media="(width > 600px)" srcSet="/src/assets/images/hero-image.jpg" />
                        <img src="/src/assets/images/hero-image.jpg" alt="hero image" />
                    </picture>
                </div>
            </article>
            <article>
                <p>More text about our mission</p>
                <div>
                    <button>Shop Now</button>
                </div>
            </article>
        </section>
    )
}