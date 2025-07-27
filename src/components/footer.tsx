import logo from '../assets/Rimberio-removebg-preview.png';

export const Footer = () => {
    return (
        <>
            <div className="w-full min-h-96 bg-zinc-950 pt-52 px-8 font-inter text-white flex flex-col gap-10">
                <div className='grid grid-cols-3'>
                    <div className='flex flex-col relative w-full h-full'>
                        <img src={logo} className='size-38 absolute -top-11 -left-6' />
                        <p className='mt-8 text-sm text-start text-zinc-400'>Revolutionizing how you search and interact with video content through advanced AI technology.</p>
                    </div>
                    <div className='flex justify-start gap-10'>
                        <div className='flex flex-col items-start pl-24'>
                            <h1 className='font-medium mb-3 text-[#D4F92F]'>Quick Links</h1>
                            <ul className='flex flex-col gap-2'>
                                <li className='text-sm text-zinc-400'>About Us</li>
                                <li className='text-sm text-zinc-400'>Contact Us</li>
                                <li className='text-sm text-zinc-400'>FAQ</li>
                                <li className='text-sm text-zinc-400'>Privacy Policy</li>
                                <li className='text-sm text-zinc-400'>Features</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start'>
                            <h1 className='font-medium mb-3 text-[#D4F92F]'>Social Links</h1>
                            <ul className='flex flex-col gap-2'>
                                <li className='text-sm text-zinc-400'>Facebook</li>
                                <li className='text-sm text-zinc-400'>Intagram</li>
                                <li className='text-sm text-zinc-400'>Twitter</li>
                                <li className='text-sm text-zinc-400'>LinkedIn</li>
                                <li className='text-sm text-zinc-400'>YouTube</li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col rounded-xl p-4 gap-1 items-center justify-center border-[1px] border-zinc-900'>
                        <h1 className='text-xl'>Contact Us</h1>
                        <p className='text-zinc-400 text-sm mb-3'>Have questions? Reach out to our support team.</p>
                        <button className='bg-[#D4F92F] w-1/2 py-2 text-black rounded-xl'>Contact Support</button>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-5'>
                    <div className='w-full h-[1px] bg-zinc-800'></div>
                    <div className='text-center text-zinc-400 mb-5 text-sm'>© Copyright 2025, All Rights Reserved by Moiz Latif</div>
                </div>
            </div>
        </>
    )
}