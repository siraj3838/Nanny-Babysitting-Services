
const SecondBanner = () => {
    return (
        <div className="max-w-screen-xl mx-auto">

            <div className="flex-row md:flex justify-center gap-10 items-center py-7 px-5 lg:px-0 lg:py-20">
                <div>
                    <div className="" data-aos-duration="2200" data-aos="flip-left">
                        <div className="w-48 py-3 text-center rounded-3xl border mx-auto bg-blue-200">
                            <h2 className="text-xl font-bold text-blue-400">WELCOME TO</h2>
                        </div>
                        <h2 className="text-center text-4xl lg:text-6xl font-bold mt-6 text-[#162060]">
                            Nanny and <br />
                            Babysitting Agency
                        </h2>
                        <p className="text-center mt-8 text-gray-400">The type of work for babysitting workers also varies from <br /> watching a sleeping child, changing diapers, playing <br /> games, preparing meals, to teaching the child to <br /> read or even driving if the age is right.</p>
                    </div>
                </div>
                <div className="" data-aos-duration="2200" data-aos="flip-right">
                    <div>
                        <img className="w-80 pl-20 pt-4 lg:pl-0 lg:pt-0 md:w-full" src="https://i.ibb.co/9hV9ndV/salus-en-madrid-y-marbella.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;