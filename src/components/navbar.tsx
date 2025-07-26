import logo from '../assets/Rimberio-removebg-preview.png';

export const Navbar = () => {
    return (
        <>
            <div className='w-full h-14 flex justify-between items-center'>
                <img src={logo} className='size-48 pl-6' />
                <div className='pr-14'>
                    <ul className='flex gap-10 items-center'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Login</li> 
                        <li>Contact</li>
                        <button className='py-2 px-4 border-[1px] border-black rounded-md'>Get Started</button>
                    </ul>
                </div>
                
            </div>
        </>
    )
}