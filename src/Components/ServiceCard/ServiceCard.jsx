
import { Link } from "react-router-dom";


const ServiceCard = ({ serviceCard }) => {
    const {id, name, image, salary, description } = serviceCard || {};


    return (
        <div className="shadow-2xl p-6 space-y-3 mb-10 bg-white">
            <div className="">
                <img className="h-60 w-full" src={image} alt="" />
            </div>
            <h3 className="text-2xl font-bold text-center text-[#763158]">{name}</h3>
            <hr />
            <div>
                <h4 className="text-xl font-semibold">Price: {salary}$</h4>
            </div>
            <p className="text-gray-400">{description.slice(0, 95)}...</p>
            <Link to={`/hiredetails/${id}`}>
                <button className="w-full text-xl font-semibold py-2 text-white bg-[#e448a0] rounded-lg hover:bg-[#b53a7f] mt-5">Details</button>
            </Link>
        </div>
    );
};

export default ServiceCard;