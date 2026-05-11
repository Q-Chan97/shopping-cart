import { Link } from "react-router";
import styles from "./ErrorPage.module.css"

export default function ErrorPage() {
    return (
        <div className={styles.container}>
            <h3>How did you get here?</h3>
            <Link to={"/"}>Click here to head home</Link>
        </div>
    )
}