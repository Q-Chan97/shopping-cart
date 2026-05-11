import styles from "./Home.module.css";
import { Link } from "react-router";

import heroImage from "/src/assets/images/hero-image.jpg";
import heroImageMobile from "/src/assets/images/hero-image-mobile.jpg";

export default function Home() {
    return (
        <section className={styles.pageContainer}>
            <article className={styles.heroContainer}>
                <p className={styles.heroText}>Handpicked, Handmade, Yours</p>
                <div className={styles.missionContainerDesktop}>
                    <p>We believe the best things aren't mass-produced — they're made with purpose, sold with pride, and loved for a lifetime.</p>
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.vignette}></div>
                    <picture>
                        <source media="(width < 600px)" srcSet={heroImageMobile}/>
                        <source media="(width > 600px)" srcSet={heroImage} />
                        <img src={heroImage} alt="hero image" className={styles.heroImage} />
                    </picture>
                </div>
            </article>
            <article className={styles.actionContainer}>
                <div className={styles.missionContainer}>
                    <p>We believe the best things aren't mass-produced — they're made with purpose, sold with pride, and loved for a lifetime.</p>
                </div>
                <button className={styles.button}>
                    <Link to={"shop"}>Shop Now</Link>
                </button>
            </article>
        </section>
    )
}