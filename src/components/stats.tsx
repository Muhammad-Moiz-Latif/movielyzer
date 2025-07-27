
export const Stats = () => {
    return (
        <>
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 mt-12 bg-[#030303] font-inter p-6 border-[1px] border-zinc-900 rounded-4xl mx-8 mb-32 text-white">
                <div className="flex flex-col justify-center items-center gap-1">
                    <h1 className="text-6xl text-[#D4F92F]">99%</h1>
                    <p className="text-white tracking-wide text-lg">Accuracy</p>
                </div>
               <div className="flex flex-col justify-center items-center gap-1">
                    <h1 className="text-6xl text-[#D4F92F]">2x</h1>
                    <p className="text-white tracking-wide text-lg">Faster</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <h1 className="text-6xl text-[#D4F92F]">100+</h1>
                    <p className="text-white tracking-wide text-lg">Companies</p>
                </div>
            </div>
        </>
    )
}