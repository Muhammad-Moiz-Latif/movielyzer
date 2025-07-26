import star from '../assets/star.png';

export const Hero = () => {
    return (
        <>
            <div className="w-full h-screen font-inter text-white mt-20 flex flex-col items-center  gap-3">
                <div className="border-[1px]  rounded-full px-6 py-1 border-[#D4F92F] mt-20 flex justify-center items-center gap-2">
                    <img src={star} className='size-3' />
                    <span>POWERED BY AI</span>
                    <img src={star} className='size-3' />
                </div>
                <h1 className="text-6xl/[1.2] tracking-wider text-center mt-5 ">Video Search Made <br /><span className="text-[#D4F92F]">Intelligent</span></h1>
                <p className="text-center">Search through video content with AI-powered precision. <br />Find exactly what you need, when you need it.</p>
                <div className="flex gap-3 mt-5">
                    <button className="bg-[#D4F92F] text-black rounded-full px-4 py-2">Watch Video</button>
                    <button className="border-[1px] rounded-full border-white px-4 py-2">
                        Get Started
                    </button>
                </div>
            </div>
        </>
    )
}