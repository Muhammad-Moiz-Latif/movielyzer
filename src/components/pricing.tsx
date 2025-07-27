import pricetag from '../assets/tag.png';
import { Check, Rocket } from 'lucide-react';

export const Pricing = () => {
  return (
    <>
      <div className="max-w-full min-h-screen bg-black px-8 font-inter text-white flex flex-col items-center">
        <div className='flex gap-2 justify-center items-center bg-zinc-950 border border-[#D4F92F] rounded-full px-6 py-1 mb-14'>
          <img src={pricetag} className='size-6' />
          <h1 >Pricing Plans</h1>
        </div>
        <h1 className='text-5xl font-medium text-white mb-6'>Simple, Transparent Pricing</h1>
        <p className='text-zinc-400 text-sm mb-16'> Choose the perfect plan for your needs. Upgrade or downgrade at any time with no hidden fees.</p>
        <div className='grid grid-cols-3 w-full gap-7'>
          <div className='flex flex-col p-5 gap-1 bg-zinc-950 rounded-2xl border-[1px] border-[#D4F92F]'>
            <h1 className='text-2xl font-medium'>Basic</h1>
            <p className='text-sm text-zinc-400 mb-3'>Try our basic features for free</p>
            <h1 className='text-2xl font-medium mb-3'>$0.00 <span className='text-sm font-normal'>/month</span></h1>
            <button className='rounded-4xl border-[1px] border-[#D4F92F] py-2 mb-3'>Try Now</button>
            <ul className='flex flex-col'>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>60 minutes of video upload</li>
              </div>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>Limited token usage (1,000 tokens)</li>
              </div>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>Basic video search</li>
              </div>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>7-day access</li>
              </div>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>Email support</li>
              </div>
            </ul>
          </div>
          <div className='flex flex-col p-5 gap-1 bg-gradient-to-br from-zinc-950 via-lime-950 to-zinc-950 rounded-2xl border-[1px] border-[#D4F92F] relative'>
            <h1 className='text-2xl font-medium'>Plus</h1>
            <div className='flex gap-2 justify-center items-center bg-[#D4F92F] rounded-full px-3 py-1 mb-14 absolute top-5 right-5'>
              <Rocket className='size-4 text-black' />
              <h1 className='text-sm  text-black'>Recommended</h1>
            </div>
            <p className='text-sm text-zinc-400 mb-3'>Full access to all premium features</p>
            <h1 className='text-2xl font-medium mb-3'>$490.00 <span className='text-sm font-normal'>/month</span></h1>
            <button className='rounded-4xl bg-[#D4F92F] text-black py-2 mb-3'>Get Started Now</button>
            <ul className='flex flex-col'>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>60 minutes of video upload</li>
              </div>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>Limited token usage (1,000 tokens)</li>
              </div>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>Basic video search</li>
              </div>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>7-day access</li>
              </div>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>Email support</li>
              </div>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>600 minutes of video upload</li>
              </div>
            </ul>
          </div>
          <div className='flex flex-col p-5 gap-1 bg-zinc-950 rounded-2xl border-[1px] border-[#D4F92F]'>
            <h1 className='text-2xl font-medium'>Enterprise</h1>
            <p className='text-sm text-zinc-400 mb-3'>Advanced features for large organizations</p>
            <h1 className='text-2xl font-medium mb-3'>$1,290.00 <span className='text-sm font-normal'>/month</span></h1>
            <button className='rounded-4xl border-[1px] border-[#D4F92F] py-2 mb-3'>Get Started Now</button>
            <ul className='flex flex-col'>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>Unlimited video uploads</li>
              </div>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>Unlimited tokens</li>
              </div>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>AI-powered insights</li>
              </div>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>24/7 dedicated support</li>
              </div>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>Advanced security features</li>
              </div>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>Custom AI models</li>
              </div>
              <div className="flex items-center mb-2">
                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                <li>White-label solution</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}