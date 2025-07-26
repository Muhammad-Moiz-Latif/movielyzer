import image from '../assets/tiny-people-family-with-kids-watching-smart-television-content-smart-tv-content-smart-tv-interactive-show-high-resolution-content-concept.png';

export const Hero = () => {
    return (
        <>
            <div className='w-full p-10'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1>Video Search made<br /> Intelligent</h1>
                        <p>Search smarter, not harder — find the exact moment you need, in seconds.
                        </p>
                        <button className='h-12 border-[1px] rounded-md'>Get Started</button>
                    </div>
                    <div className='flex-1'>
                        <img src={image} className='' />
                    </div>
                </div>
            </div>
        </>
    )
}