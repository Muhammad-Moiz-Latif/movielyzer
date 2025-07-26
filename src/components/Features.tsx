"use client"

import { Search, Clock, Upload } from "lucide-react"
import star from '../assets/star.png';

const Features = () => {
    return (
        <>
            <div className="w-full h-screen bg-black text-white font-inter flex flex-col items-center px-13">
                <div className="border-[1px] rounded-full px-6 py-1 border-[#D4F92F] flex justify-center items-center gap-2">
                    <img src={star} className='size-3' />
                    <span>FEATURES</span>
                    <img src={star} className='size-3' />
                </div>
                <h1 className="text-center text-5xl mt-20">Why Our AI Search Stands Out</h1>
                <p className="text-center text-gray-300 mt-3">Unlock smarter video search. Save time. Get results.</p>
                <div className="flex justify-center items-center gap-10 mt-10">
                    <div className="flex flex-col gap-2 bg-[#0c0c0c] p-5 rounded-md border-[#0c0c0c] border-[2px] hover:border-[#D4F92F] transition-all delay-75">
                        <Search className="text-[#D4F92F] mb-4 w-8 h-8" />
                        <h1 className="text-xl">Intelligent Search</h1>
                        <p className="text-sm">Our AI understands context and content, making your video searches more accurate than ever before.</p>
                    </div>
                    <div className="flex flex-col gap-2 bg-[#0c0c0c] p-5 rounded-md border-[#0c0c0c] border-[2px] hover:border-[#D4F92F] transition-all delay-75">
                        <Clock className="text-[#D4F92F] mb-4 w-8 h-8" />
                        <h1 className="text-xl">Time Saving
                        </h1>
                        <p className="text-sm">Find exactly what you are looking for in seconds, not hours. Jump directly to relevant moments.</p>
                    </div>
                    <div className="flex flex-col gap-2 bg-[#0c0c0c] p-5 rounded-md border-[#0c0c0c] border-[2px] hover:border-[#D4F92F] transition-all delay-75">
                        <Upload className="text-[#D4F92F] mb-4 w-8 h-8" />
                        <h1 className="text-xl">Easy Upload</h1>
                        <p className="text-sm">Simply upload your videos and our system automatically processes them for intelligent searching.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
