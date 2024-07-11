import { useState } from 'react';
import data from '../../utils/constants/provinces';
import { Heading } from '../UI/Typography/Typography';
import Button from '../UI/Button/Button';
import { FormLeftStyled, FormRightStyled, FormStyled } from './Form.styled';

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
        <FormStyled>
            <section>
                <FormLeftStyled>
                    <img src="/assets/formimg.png" alt="placeholder" />
                </FormLeftStyled>
                <FormRightStyled>
                    <Heading>Form Data Covid</Heading>
                    <form onSubmit={handleSubmit}>
                        <label>Provinsi</label><br />
                        <select
                            name="provinsi"
                            value={formData.provinsi}
                            onChange={handleChange}
                        >
                            <option value="">Pilih Provinsi</option>
                            {data.provinces.map((province, index) => (
                                <option key={index} value={province.provinsi}>{province.provinsi}</option>
                            ))}
                        </select><br />

                        <label>Status</label><br />
                        <select
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

                        <label>Jumlah</label><br />
                        <input
                            type="number"
                            placeholder="Masukkan Jumlah"
                            name="jumlah"
                            value={formData.jumlah}
                            onChange={handleChange}
                        />
                        <br />
                        <Button>Submit</Button>
                    </form>
                </FormRightStyled>
            </section>
        </FormStyled>
    );
}

export default Form;
