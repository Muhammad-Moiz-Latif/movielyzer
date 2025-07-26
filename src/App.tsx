import './App.css'
import Features from './components/Features'
import { Hero } from './components/Hero'
import HowItWorks from './components/HowItWorks'
import { Navbar } from './components/navbar'


export default function App(){
  return(
    <div className='max-w-screen min-h-screen'>
      <Navbar/>
      <Hero/>
      <Features/>
      <HowItWorks/>
    </div>
  )
}