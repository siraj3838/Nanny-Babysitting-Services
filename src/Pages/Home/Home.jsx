import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import Navbar from "../../Components/ReUsed/Navbar/Navbar";
import Banner from "../../Components/ReUsed/Banner/Banner";

const Home = () => {
    const [apiData, setApiData] = useState([]);
    const loadData = useLoaderData()
    useEffect(()=>{
        setApiData(loadData)
    },[loadData])
    return (
        <div className="">
            <Navbar></Navbar>
            <Banner></Banner>
            <h4 className="my-10 text-4xl text-center font-bold">Our All Services</h4>
            <div className="grid grid-cols-3 gap-6 mt-10 max-w-screen-xl mx-auto">
                {
                    apiData.map(serviceCard => <ServiceCard key={serviceCard.id} serviceCard={serviceCard}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;