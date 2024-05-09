import styles from "./Indonesia.module.css";

function Indonesia({ data }) {
    const { status, total, color } = data;

    const statusStyle = { color: color };

    const formattedTotal = total.toLocaleString();

    return (
        <div className={styles.card__warp}>
            <div className={styles.warp__title}>
                <h2 style={statusStyle}>{status}</h2>
                <p style={statusStyle}>{formattedTotal}</p>
            </div>
        </div>
    );
}

export default Indonesia;
