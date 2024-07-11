import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";
import Table from "../components/Table/Table"; 

function IndonesiaCovid() {
    const [indonesiaData, setIndonesiaData] = useState([]);
    const [provinceData, setProvinceData] = useState([]);

    useEffect(() => {
        async function fetchCovidData() {
            const response = await axios.get("https://covid-fe-2023.vercel.app/api/indonesia.json");
            setIndonesiaData(response.data.indonesia);
            setProvinceData(response.data.regions.map(region => ({
                provinsi: region.name,
                kasus: region.numbers.confirmed.toLocaleString(),
                sembuh: region.numbers.recovered.toLocaleString(),
                dirawat: region.numbers.treatment.toLocaleString(),
                meninggal: region.numbers.death.toLocaleString(),
            })));
        }

        fetchCovidData();
    }, []);

    return (
        <div>
            <Hero />
            <Card title="Indonesia Situation" data={indonesiaData} type="indonesia" subtitle="Data Covid Berdasarkan Indonesia" />
            <Table title="Provinsi" subtitle="Data Covid berdasarkan Provinsi" tableData={provinceData} />
        </div>
    );
}

export default IndonesiaCovid;
