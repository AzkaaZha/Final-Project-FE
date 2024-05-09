import styles from "./Card.module.css";
import data from "../../utils/constants/indonesia";
import Indonesia from "../Indonesia/Indonesia";


function Card(){

    const { indonesia } = data;

    return (
        <div className={styles.container}>
            <section className={styles.card}>
                <h1 className={styles.card__title}>Indonesia</h1>
                <p className={styles.card__sub__title}>Data Covid berdasarkan Indonesia</p>
                <main className={styles.card__grid}>
                    {indonesia.map((item) => {
                        return <Indonesia key={item.status} data={item} />;
                    })}
                </main>
            </section>
        </div>
    );
}

export default Card;
