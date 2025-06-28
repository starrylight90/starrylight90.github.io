import React, {useInsertionEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
       <div className='flex items-center gap-2'>
  {/* Logo: Refresh Home */}
  <Link
    to="/"
    onClick={() => {
      setActive("");
      window.scrollTo(0, 0);
    }}
  >
    <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
  </Link>

  {/* Name + GitHub: Separate links but styled inline */}
  <p className="text-white text-[18px] font-bold flex gap-1 items-center">
    <a
      href="https://linkedin.com/in/skp2208"
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer hover:underline"
    >
      Swayam Pendgaonkar
    </a>
    <span className="sm:block hidden">|</span>
    <a
      href="https://github.com/starrylight90"
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer hover:underline sm:block hidden"
    >
      Starrylight90
    </a>
  </p>
</div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((Link) =>(
              <li
                key={Link.id}
                className={`${
                  active === Link.title
                  ? "text-white"
                  : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(Link.title)}
              >
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ) )}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
                <img 
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
                />
                <div className={`${!toggle ? 'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
                <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((Link) =>(
              <li
                key={Link.id}
                className={`${
                  active === Link.title
                  ? "text-white"
                  : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(Link.title);
                }
              }
              >
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ) )}
          </ul>
                </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar