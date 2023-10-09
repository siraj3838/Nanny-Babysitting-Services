import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import EmployerCard from "./EmployerCard/EmployerCard";

const EmployerList = () => {
    const [employersData, setEmployersData] = useState([]);
    const [seeMore, setSeeMore] = useState(false)
    useEffect(() => {
        fetch('/babysitter.json')
            .then(res => res.json())
            .then(data => setEmployersData(data))
    }, [])
    return (
        <div className="bg-[#cf1bdc15] py-5">
            <div className="max-w-screen-xl mx-auto my-5" data-aos="flip-up" data-aos-duration="2200">
                <div className="">
                    <div className="w-48 py-3 text-center rounded-3xl border mx-auto bg-pink-400">
                        <h2 className="text-xl font-bold text-blue-100">OUR GREAT STAFF</h2>
                    </div>
                    <h2 className="text-center text-3xl mb-4 lg:text-6xl font-bold font-serif mt-6 text-[#162060]">
                        Meet Our Babysitter
                    </h2>
                </div>
                <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                          seeMore ? employersData.map(employer => <EmployerCard key={employer.id} employer={employer}></EmployerCard>)
                          :  employersData.slice(0,3).map(employer => <EmployerCard key={employer.id} employer={employer}></EmployerCard>)
                        }
                    </div>
                    <div className="flex justify-center mt-5">
                        <button onClick={()=> setSeeMore(!seeMore)} className={`text-xl px-6 py-2 text-white bg-sky-600 rounded-lg hover:bg-sky-700 font-bold ${seeMore ? 'hidden' : ''}`}>See All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployerList;