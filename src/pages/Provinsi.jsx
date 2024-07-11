import Hero from "../components/Hero/Hero";
import Table from "../components/Table/Table";
import Form from "../components/Form/Form";
import { useState } from "react";
import data from "../utils/constants/provinces";

function ProvinsiCovid() {
    const [provinceData, setProvinceData] = useState(data.provinces);

    const AddData = (formData) => {
        const updatedData = provinceData.map((province) => {
            if (province.provinsi === formData.provinsi) {
                return {
                    ...province,
                    [formData.status]: parseInt(formData.jumlah),
                }
            }
            return province;
        });
        setProvinceData(updatedData);
    }

    return (
        <>
            <Hero />
            <Table title="Provinsi" subtitle="Data Covid berdasarkan Provinsi" tableData={provinceData} />
            <Form AddData={AddData} />
        </>
    );
}

export default ProvinsiCovid;
