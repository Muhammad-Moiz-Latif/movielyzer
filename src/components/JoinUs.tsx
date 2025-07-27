import bg from '../assets/3d-render-digital-technology-background-with-lcd-design.jpg';

export const JoinUs = () => {
    return(
        <>
            <div className="w-full h-96 flex justify-center items-center px-20 py-10 mt-20 font-inter -mb-48">
                <div className='w-full h-full rounded-4xl relative'>
                     <img src={bg} className='w-full h-full object-cover rounded-4xl z-0 blur-[2px]'/>
                     <h1 className='absolute text-5xl w-full font-semibold z-10 text-[#D4F92F] top-3 left-1/2 -translate-x-1/2  text-center'>Subscribe to our newsletter</h1>
                     <p className='text-white absolute top-16 font-medium left-1/2 -translate-x-1/2 text-center'>Stay in the loop — Get exclusive updates, insights, and tips delivered straight to your inbox.</p>
                     <form className='absolute bottom-24 w-full flex gap-3 justify-center items-center left-1/2 -translate-x-1/2'>
                        <input className='placeholder:text-[#D4F92F] bg-transparent border-[1px] border-[#D4F92F] outline-none w-[40%] py-3  text-white px-4 backdrop-blur-sm rounded-xl' type='email' placeholder='Email'/>
                        <button className='text-black bg-[#D4F92F] py-3 px-6 rounded-xl backdrop-blur-sm'>Submit</button>
                     </form>
                </div>
            </div>
        </>
    )
}