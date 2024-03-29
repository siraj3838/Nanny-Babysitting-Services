import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../ReUsed/Navbar/Navbar";


const HireCardDetails = () => {
    const [detailsData, setDetailsData] = useState({})
    const { id } = useParams();
    const detailsApi = useLoaderData()
    useEffect(() => {
        const isExist = detailsApi.find(api => api.id == id)
        setDetailsData(isExist)
    }, [detailsApi, id])
    const { name, image, salary, description } = detailsData || {};
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-slate-300 p-10">
                <div className="max-w-screen-lg mx-auto px-3 py-3 lg:py-5 lg:px-10 space-y-3 border shadow-2xl">
                    <div className="flex justify-center"><img className="lg:h-[475px] w-full" src={image} alt="" /></div>
                        <div className="flex justify-between items-center">
                        <h4 className="text-xl lg:text-3xl font-semibold">{name}</h4>
                        <h4 className="text-xl lg:text-2xl font-semibold">Price: {salary}$</h4>
                        </div>
                    <p className="text-sm lg:text-xl">{description}</p>
                </div>
            </div>

        </div>
    );
};

export default HireCardDetails;