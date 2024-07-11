import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";

function HomePage() {
    const [globalData, setGlobalData] = useState([]);
    const [regionData, setRegionData] = useState([]);

    useEffect(() => {
        async function fetchCovidData() {
            const response = await axios.get("https://covid-fe-2023.vercel.app/api/global.json");
            setGlobalData(response.data.global);
            setRegionData(response.data.regions);
        }

        fetchCovidData();
    }, []);

    return (
        <div>
            <Hero />
            <Card title="Global Situation" data={globalData} type="global" subtitle="Data Covid Berdasarkan Global"/>
            <Card title="Situation by Regions" data={regionData} type="region" subtitle="Bacaan Pilihan Covid"/>
        </div>
    );
}

export default HomePage;
