import image from '../assets/tiny-people-family-with-kids-watching-smart-television-content-smart-tv-content-smart-tv-interactive-show-high-resolution-content-concept.png';

export const Hero = () => {
    return (
        <>
            <div className='w-full p-10 '>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-6xl font-bold'>Video Search<br /> made <span className='bg-gradient-to-b 
                         from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent'>Intelligent</span></h1>
                        <p className='text-start tracking-tighter'>Search smarter, not harder — find the exact moment you need, in seconds.
                        </p>
                        <button className='h-12 w-[35%] border-[1px] rounded-md bg-black text-white'>Get Started</button>
                    </div>
                    <div className='flex-1'>
                        <img src={image} className='' />
                    </div>
                </div>
            </div>
        </>
    )
}