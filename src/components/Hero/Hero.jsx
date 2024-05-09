import styles from './Hero.module.css';

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h1 className={styles.hero__title}>COVIDCARE</h1>
                    <h3 className={styles.hero__sub_title}>Monitoring Perkembangan Covid</h3>
                    <p className={styles.hero__description}>
                        CovidCare adalah sebuah sistem informasi yang dirancang untuk memantau dan melacak jumlah kasus COVID-19 secara real-time. Dengan menggunakan teknologi terkini, aplikasi ini memungkinkan pengguna untuk mengakses informasi terbaru tentang jumlah kasus positif, pemulihan, dan kematian akibat COVID-19 di wilayah tertentu. 
                    </p>
                    <button className={styles.hero__button}>Vaccine</button>
                </div>
                <div className={styles.hero__right}>
                    <img
                    className={styles.hero__image} 
                    src="/assets/heroimg.png" alt="placeholder" />
                </div>
            </section>
        </div>
    );
}

export default Hero;