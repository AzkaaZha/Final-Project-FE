import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import Table from "../../components/Table/Table";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import data from "../../utils/constants/provinces"; 
import { useState } from "react";

function HomePage() {
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
        <div>
            <Navbar />
            <main>
                <Hero />
                <Card />
                <Table provinceData={provinceData} /> 
                <Form AddData={AddData} /> 
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
