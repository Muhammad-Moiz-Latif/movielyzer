import logo from '../assets/Rimberio-removebg-preview.png';

export const Navbar = () => {

    return (
        <>
            <div className='w-full h-14 fixed text-white p-10 font-inter bg-black'>
                <div className='h-full flex justify-between items-center relative '>
                    <img src={logo} className='size-56 absolute -top-[77px] -left-6' />
                    <div className='mr-32'></div>
                    <div className='flex justify-center items-center gap-14 border-[1px] border-zinc-800 py-2 rounded-full px-7 '>
                        <h1>Home</h1>
                        <h1>About Us</h1>
                        <h1>Contact Us</h1>
                    </div>
                    <button className='border-[1px] border-white px-7 py-2  rounded-full text-white'>Sign In</button>
                </div>
            </div>
        </>
    )
}