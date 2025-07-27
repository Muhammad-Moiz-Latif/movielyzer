"use client"

import Search from '../assets/ai.png';
import Clock from '../assets/clock.png';
import Upload from '../assets/cloud-computing.png';;
import Shield from '../assets/safe.png';
import arrow from '../assets/arrows.png';

const Features = () => {
    return (
        <>
            <div className="w-full h-screen bg-black text-white font-inter flex flex-col items-center px-13">
                <div className=" rounded-full px-6 py-1  flex justify-center items-center gap-5">
                    <img src={arrow} className='size-10 w-20' />
                    <span className="text-gray-400">FEATURES</span>
                    <img src={arrow} className='size-10 w-20 rotate-180' />
                </div>
                <h1 className="text-center text-5xl mt-20">Why Our AI Search Stands Out</h1>
                <p className="text-center text-gray-400 mt-3">Unlock smarter video search. Save time. Get results.</p>
                <div className="flex justify-center items-center gap-3  mt-10">
                    <div className="flex flex-1 flex-col gap-2 bg-[#030303] p-3 rounded-md border-[#0c0c0c] border-[2px] hover:border-[#D4F92F] transition-all delay-75 text-justify">
                        <img src={Search} className="text-[#D4F92F] mb-4 w-8 h-8" />
                        <h1 className="text-xl">Intelligent Search</h1>
                        <p className="text-sm text-gray-400 text-start">Our AI understands context and content, making your video searches more accurate than ever before.</p>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 bg-[#030303] p-3 rounded-md border-[#0c0c0c] border-[2px] hover:border-[#D4F92F] transition-all delay-75 text-justify">
                        <img src={Clock} className="text-[#D4F92F] mb-4 w-8 h-8" />
                        <h1 className="text-xl">Time Saving
                        </h1>
                        <p className="text-sm text-gray-400 text-start">Find exactly what you are looking for in seconds, not hours. Jump directly to relevant moments.</p>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 bg-[#030303] p-3 rounded-md border-[#0c0c0c] border-[2px] hover:border-[#D4F92F] transition-all delay-75 text-justify">
                        <img src={Upload} className="text-[#D4F92F] mb-4 w-8 h-8" />
                        <h1 className="text-xl">Easy Upload</h1>
                        <p className="text-sm text-gray-400 text-start">Simply upload your videos and our system automatically processes them for intelligent searching.</p>
                    </div>
                     <div className="flex flex-1 flex-col gap-2 bg-[#030303] p-3 rounded-md border-[#0c0c0c] border-[2px] hover:border-[#D4F92F] transition-all delay-75 text-justify">
                        <img src={Shield} className="text-[#D4F92F] mb-4 w-8 h-8" />
                        <h1 className="text-xl">Secure & Reliable</h1>
                        <p className="text-sm text-gray-400 text-start">Enterprise-grade security with 99.9% uptime guarantee and end-to-end encryption.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
