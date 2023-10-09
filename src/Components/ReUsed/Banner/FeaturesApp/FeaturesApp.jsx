import { AiFillApple } from 'react-icons/ai';
import { BiLogoPlayStore } from 'react-icons/bi';

const FeaturesApp = () => {
    return (
        <div className="bg-white mt-16">
            <div className="max-w-screen-xl mx-auto">
                <div>
                    <div className="w-48 py-3 text-center rounded-3xl border mx-auto bg-blue-200">
                        <h2 className="text-xl font-bold text-blue-400">
                            MEET APP</h2>
                    </div>
                    <h2 className="text-center text-6xl font-bold mt-6 text-[#162060]">
                        Check Our Mobile Application
                    </h2>
                </div>
                <div className="flex justify-center gap-10 items-center py-16">
                    <div className="">
                        <div>
                            <img className="h-[440px]" src="https://i.ibb.co/8XwdXxZ/phone.webp" alt="" />
                        </div>
                    </div>
                    <div className="text-right space-y-3">
                        <div>
                            <button className="bg-[#162060] text-white rounded-lg"><div className="px-4 py-5 flex items-center gap-3">
                                <span className="">Download From</span><span className="text-2xl font-extrabold">Apple Store</span><AiFillApple className='text-4xl'></AiFillApple></div></button>
                        </div>
                        <div>
                            <button className="bg-[#162060] text-white rounded-lg"><div className="px-4 py-5 flex items-center gap-3">
                                <span className="">Download From</span><span className="text-2xl font-extrabold">Apple Store</span><BiLogoPlayStore className='text-4xl'></BiLogoPlayStore></div></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesApp;