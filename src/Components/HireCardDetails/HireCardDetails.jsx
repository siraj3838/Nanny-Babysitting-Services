import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../ReUsed/Navbar/Navbar";
import moment from "moment/moment";

const HireCardDetails = () => {
    const [detailsData, setDetailsData] = useState({})
    const { id } = useParams();
    const detailsApi = useLoaderData()
    useEffect(() => {
        const isExist = detailsApi.find(api => api.id == id)
        setDetailsData(isExist)
    }, [detailsApi, id])
    const { name, image, description } = detailsData || {};
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-slate-300">
                <div className="max-w-screen-xl mx-auto py-5 pr-56 space-y-3">
                    <div className=""><img className="h-[475px] w-full" src={image} alt="" /></div>
                        <h4 className="text-3xl font-semibold">{name}</h4>
                    <p className="text-xl">{description}</p>
                </div>
            </div>

        </div>
    );
};

export default HireCardDetails;