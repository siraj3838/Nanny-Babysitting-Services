import { MdVerifiedUser } from 'react-icons/md';

const ForthBanner = () => {
    return (
        <div className="bg-white mt-16">
            <div className="max-w-screen-xl mx-auto">
                <div data-aos="fade-down" data-aos-duration="1400">
                    <div className="w-48 py-3 text-center rounded-3xl border mx-auto bg-blue-200">
                        <h2 className="text-xl font-bold text-blue-400">BOUR VALUES</h2>
                    </div>
                    <h2 className="text-center text-3xl lg:text-6xl font-bold mt-6 text-[#162060]">
                        Total Peace of Mind
                    </h2>
                </div>
                <div className="px-2 md:px-6 lg:px-0 flex-row lg:flex justify-center gap-10 items-center py-16">
                    <div className='space-y-3' data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        >
                        <div className='flex justify-center items-center gap-3'>
                            <div className='text-5xl text-blue-500 bg-white rounded-full'><MdVerifiedUser></MdVerifiedUser></div>
                            <div>
                                <h3 className="text-[#162060] font-bold text-xl hover:text-[#8f1178]">Nanny Supervision</h3>
                                <p className="text-gray-400">Being a great nanny requires more than a  genuine love of children.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <div className='text-5xl text-blue-500 bg-white rounded-full'><MdVerifiedUser></MdVerifiedUser></div>
                            <div>
                                <h3 className="text-[#162060] font-bold text-xl hover:text-[#8f1178]">Last-minute Requests</h3>
                                <p className="text-gray-400 inline">If you are considering hiring a nanny or becoming one,</p>
                            </div>
                        </div>
                    </div>
                    <div className="" data-aos="fade-up"
                        data-aos-duration="2200">
                        <div>
                            <img className="w-[490px]" src="https://i.ibb.co/GxCsPds/img-7.webp" alt="" />
                        </div>
                    </div>
                    <div className="text-right space-y-3" data-aos="fade-left"
                        data-aos-duration="2200">
                        <div className='flex justify-center items-center gap-3'>
                            <div>
                                <h3 className="text-[#162060] font-bold text-xl hover:text-[#8f1178]">All Ages Childcare</h3>
                                <p className="text-gray-400 inline">We have a separate classroom for our 2 to 2 <br /> 1/2 year olds and another room dedicated</p>
                            </div>
                            <div className='text-5xl text-blue-500 bg-white rounded-full'><MdVerifiedUser></MdVerifiedUser></div>
                        </div>
                        <div className='flex justify-center items-center gap-3 mr-5'>
                            <div>
                                <h3 className="text-[#162060] font-bold text-xl hover:text-[#8f1178]">Baby Care Solutions</h3>
                                <p className="text-gray-400 inline">Baby Care Solutions is a very reliable baby  care service provider,</p>
                            </div>
                            <div className='text-5xl text-blue-500 bg-white rounded-full'><MdVerifiedUser></MdVerifiedUser></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForthBanner;