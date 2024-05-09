import styles from './Table.module.css';

function Table({ provinceData }) {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <div>
                    <h1 className={styles.table__title}>Provinsi</h1>
                    <p className={styles.table__sub__title}>Data Covid berdasarkan Provinsi</p>
                </div>
                <div className={styles.table__container}>
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Provinsi</th>
                                <th>Kasus</th>
                                <th>Sembuh</th>
                                <th>Dirawat</th>
                                <th>Meninggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {provinceData.map((province, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{province.provinsi}</td>
                                    <td>{province.kasus}</td>
                                    <td>{province.sembuh}</td>
                                    <td>{province.dirawat}</td>
                                    <td>{province.meninggal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default Table;
