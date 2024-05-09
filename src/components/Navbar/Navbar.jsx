import styles from './Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.navbar}>
                    <div>
                    <img className={styles.navbar__logo} src="/assets/logo.png" alt="logo" />
                    </div>
             
                    <div>
                        <ul className={styles.navbar__list}>
                            <li className={styles.navbar__item}>Home</li>
                            <li className={styles.navbar__item}>Global</li>
                            <li className={styles.navbar__item}>Indonesia</li>
                            <li className={styles.navbar__item}>Provinsi</li>
                            <li className={styles.navbar__item}>About</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;