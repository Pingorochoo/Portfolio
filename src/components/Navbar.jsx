import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Manuel Martinez
          </p>
        </Link>
        <ul className="hidden sm:flex gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`hover:text-white text-[18px] font-medium cursor-pointer
                ${active === link.title ? "text-white" : "text-secondary"}`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
            className="w-7 h-7 object-contain cursor-pointer"
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="flex flex-col gap-4 items-start justify-end">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`hover:text-white text-[16px] font-medium cursor-pointer font-poppins
                ${active === link.title ? "text-white" : "text-secondary"}`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
