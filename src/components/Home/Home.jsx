import styles from "./Home.module.css";

import heroImage from "/src/assets/images/hero-image.jpg";
import heroImageMobile from "/src/assets/images/hero-image-mobile.jpg";

export default function Home() {
    return (
        <section>
            <article className={styles.heroContainer}>
                <p className={styles.heroText}>Attention-Grabbing Text</p>
                <div className={styles.imageContainer}>
                    <div className={styles.vignette}></div>
                    <picture>
                        <source media="(width < 600px)" srcSet={heroImageMobile}/>
                        <source media="(width > 600px)" srcSet={heroImage} />
                        <img src={heroImage} alt="hero image" />
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