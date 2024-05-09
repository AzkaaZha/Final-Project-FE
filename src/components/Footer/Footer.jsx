import styles from './Footer.module.css';

function Footer(){
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                    <div>
                        <img className={styles.footer__logo} src="/assets/logo.png" alt="logo" />
                        <p className={styles.footer__description}>2024 All Rights Reserved. By Zharari.Azka</p>
                    </div>
                    

                    <div>
                        <ul className={styles.footer__list}>
                            <li className={styles.footer__item}>Home</li>
                            <li className={styles.footer__item}>Global</li>
                            <li className={styles.footer__item}>Indonesia</li>
                            <li className={styles.footer__item}>Provinsi</li>
                            <li className={styles.footer__item}>About</li>
                        </ul>
                    </div>
            </footer>
        </div>
    );
}

export default Footer;