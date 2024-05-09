import { useState } from 'react';
import styles from './Form.module.css';
import data from '../../utils/constants/provinces';

function Form({ AddData }) {
    const [formData, setFormData] = useState({
        provinsi: "",
        status: "",
        jumlah: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.provinsi && formData.status && formData.jumlah) {
            AddData(formData);
            setFormData({
                provinsi: "",
                status: "",
                jumlah: "",
            });
        }
    }

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img className={styles.form__image} src="/assets/formimg.png" alt="placeholder" />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Form Data Covid</h2>
                    <form onSubmit={handleSubmit}>
                        <label className={styles.form__label}>Provinsi</label><br />
                        <select
                            className={styles.form__input}
                            name="provinsi"
                            value={formData.provinsi}
                            onChange={handleChange}
                        >
                            <option value="">Pilih Provinsi</option>
                            {data.provinces.map((province, index) => (
                                <option key={index} value={province.provinsi}>{province.provinsi}</option>
                            ))}
                        </select><br />

                        <label className={styles.form__label}>Status</label><br />
                        <select
                            className={styles.form__input}
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="">Pilih Status</option>
                            <option value="kasus">Kasus</option>
                            <option value="sembuh">Sembuh</option>
                            <option value="meninggal">Meninggal</option>
                            <option value="dirawat">Dirawat</option>
                        </select><br />

                        <label className={styles.form__label}>Jumlah</label><br />
                        <input
                            type="number"
                            placeholder="Masukkan Jumlah"
                            className={styles.form__input}
                            name="jumlah"
                            value={formData.jumlah}
                            onChange={handleChange}
                        />
                        <button type="submit" className={styles.form__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Form;
