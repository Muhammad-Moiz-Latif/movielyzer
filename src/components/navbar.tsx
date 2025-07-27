import { useEffect, useState } from 'react';
import logo from '../assets/Rimberio-removebg-preview.png';

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // scrolling down → hide navbar
      } else {
        setShowNavbar(true); // scrolling up → show navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full h-14 fixed text-white p-10 font-inter bg-black z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="h-full flex justify-between items-center relative">
        <img
          src={logo}
          className="size-56 absolute -top-[77px] -left-6"
          alt="Logo"
        />
        <div className="mr-32"></div>
        <div className="flex justify-center items-center gap-14 border border-zinc-800 py-2 rounded-full px-7">
          <h1>Home</h1>
          <h1>About Us</h1>
          <h1>Contact Us</h1>
        </div>
        <button className="border border-white px-7 py-2 rounded-full text-white">
          Sign In
        </button>
      </div>
    </div>
  );
};
