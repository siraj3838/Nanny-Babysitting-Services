import { useState } from "react";
import { Link } from "react-router-dom";


const ServiceCard = ({ serviceCard }) => {
    const [readMore, setReadMore] = useState(false);
    const {id, name, image, salary, description } = serviceCard || {};


    return (
        <div className="shadow-2xl p-6 space-y-3 mb-10">
            <div className="">
                <img className="h-60 w-full" src={image} alt="" />
            </div>
            <h3 className="text-2xl font-bold text-center text-[#763158]">{name}</h3>
            <div>
                <h4 className="text-xl font-medium">Salary: {salary}$ per Month</h4>
            </div>
            <p>{readMore ? description : description.slice(0, 95)}<button onClick={() => setReadMore(!readMore)} className="text-[#e448a0]">{readMore ? 'read less' : 'read more..'}</button></p>
            <Link to={`/details/${id}`}>
                <button className="w-full text-xl font-semibold py-2 text-white bg-[#e448a0] rounded-lg hover:bg-[#b53a7f]">Hire</button>
            </Link>
        </div>
    );
};

export default ServiceCard;