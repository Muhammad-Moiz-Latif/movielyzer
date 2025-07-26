import './App.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/navbar'


export default function App(){
  return(
    <div className='w-screen min-h-screen'>
      <Navbar/>
      <Hero/>
    </div>
  )
}