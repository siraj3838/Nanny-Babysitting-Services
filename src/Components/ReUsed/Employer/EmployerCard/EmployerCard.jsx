
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const EmployerCard = ({employer}) => {
    const {image,name,position} = employer || {};
    const hireHandle = () => {
        Swal.fire(
            'Hire Successfully',
            'Thank You For Hire',
            'success'
          )
        
    }
    return (
        <div>
            <div className="flex justify-center">
                <img className="w-52 rounded-full h-52" src={image} alt="" />
            </div>
            <h3 className="text-3xl font-bold text-center my-3">{name}</h3>
            <h5 className="text-center text-lg">{position}</h5>
            <div className="flex justify-center py-3">
                <Link><button onClick={hireHandle} className="text-xl px-6 py-2 text-white bg-[#e448a0] rounded-lg hover:bg-[#b53a7f] font-bold">Hire Now</button></Link>
            </div>
        </div>
    );
};

export default EmployerCard;