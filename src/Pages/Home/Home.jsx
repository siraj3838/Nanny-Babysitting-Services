import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import Navbar from "../../Components/ReUsed/Navbar/Navbar";
import Banner from "../../Components/ReUsed/Banner/Banner";
import SecondBanner from "../../Components/ReUsed/Banner/SecondBanner/SecondBanner";
import ForthBanner from "../../Components/ReUsed/Banner/ForthBanner/ForthBanner";
import FifthBanner from "../../Components/ReUsed/Banner/FifthBanner/FifthBanner";


const Home = () => {
    const [apiData, setApiData] = useState([]);
    const loadData = useLoaderData()
    useEffect(() => {
        setApiData(loadData)
    }, [loadData])
    return (
        <div className="">
            <Navbar></Navbar>
            <Banner></Banner>
            <SecondBanner></SecondBanner>
            <div className="bg-slate-100">
                <h4 className="py-10 text-4xl text-center font-bold">Our All Services</h4>
                <div className="grid px-6 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-screen-xl mx-auto" data-aos-duration="2200" data-aos="flip-left">
                    {
                        apiData.map(serviceCard => <ServiceCard key={serviceCard.id} serviceCard={serviceCard}></ServiceCard>)
                    }
                </div>
            </div>
            <ForthBanner></ForthBanner>
            <FifthBanner></FifthBanner>

        </div>
    );
};

export default Home;