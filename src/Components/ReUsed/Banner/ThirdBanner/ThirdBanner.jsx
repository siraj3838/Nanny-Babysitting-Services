
const ThirdBanner = () => {
    return (
        <div className="bg-sky-100">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-0">
                <div className="flex-row-reverse lg:flex justify-center gap-4 lg:gap-10 items-center py-16">
                    <div className="">
                        <div className="md:pl-28 lg:pl-0">
                            <img className="w-80 lg:w-[490px]" src="https://i.ibb.co/0mwtvH0/img-3.webp" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <div className="w-48 py-3 text-center rounded-3xl border mx-auto bg-blue-200">
                                <h2 className="text-xl font-bold text-blue-400">BENEFITS OF</h2>
                            </div>
                            <h2 className="text-center text-3xl lg:text-6xl font-bold mt-6 text-[#162060]">
                                Childcare Services
                            </h2>
                            <p className="text-center mt-8 text-gray-500">Our service is simple, once you register with Happy Baby we select <br /> and introduce suitable babysitter/s for your family. <br /> You then are free to contact that babysitter as many times <br /> as required for further bookings.</p>
                            <div className="flex items-center gap-8 justify-center mt-5">
                                <ul className="font-medium">
                                    <p>1. Individual childcare advice</p>
                                    <p>2. Peace of mind</p>
                                    <p>3. Flexibility and choice</p>
                                </ul>
                                <ul className="font-medium">
                                    <p>4. Support when you need it</p>
                                    <p>5. Reclaim your social life</p>
                                    <p>6. Five years of experience</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdBanner;