"use client";

import { useAnimateHeaderDropdown } from "@/hooks/useAnimation";
import Gradient from "@/icons/gradient";
import KiteIcon from "@/icons/kite";
import Logo from "@/icons/logo";
import {
  GoogleIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MediumIcon,
  XIcon,
} from "@/icons/socialIcons";
import WeatherIcon from "@/icons/weather";
import { Squeeze as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { socialLinks } from "../../data";
import InfoBar from "./infoBar";

const navLinks = ["about", "updates", "blog", "contact"];

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const timelineRef = useAnimateHeaderDropdown();

  useEffect(() => {
    if (!timelineRef.current) return;
    timelineRef.current.reversed(!timelineRef.current.reversed());

    open
      ? (document.documentElement.style.overflow = "hidden")
      : (document.documentElement.style.overflow = "auto");
  }, [open, timelineRef]);

  // CLOSE DROPDOWN WHENEVER A NEW PAGE IS OPEN
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // const showInfo = pathname === "/contact" || pathname === "/about";
  const isHomepage = pathname === "/";

  return (
    <>
      <header className="w-fullscreen mt-5 2xl:mt-10 mx-auto px-5 md:px-10 max-w-full flex justify-between items-center relative">
        <Link href="/" data-cursor="-hidden">
          <Logo />
        </Link>
        {isHomepage && (
          <div
            className="px-5 py-[18px] mr-28 bg-[#00000026] hidden md:flex gap-6 rounded-[48px]"
            data-cursor="-hidden"
          >
            <button className="transition-transform duration-500 hover:scale-125">
              <GoogleIcon />
            </button>
            <button className="transition-transform duration-500 hover:scale-125">
              <LinkedinIcon />
            </button>
            <button className="transition-transform duration-500 hover:scale-125">
              <XIcon />
            </button>
            <button className="transition-transform duration-500 hover:scale-125">
              <GithubIcon />
            </button>
            <button className="transition-transform duration-500 hover:scale-125">
              <MediumIcon />
            </button>
            <button className="transition-transform duration-500 hover:scale-125">
              <InstagramIcon />
            </button>
          </div>
        )}
        <button data-cursor="-hidden" className="scale-[0.7] md:scale-100">
          <Hamburger
            toggled={open}
            toggle={setOpen}
            rounded
            label="Show menu"
            distance="sm"
          />
        </button>
      </header>

      {/* MOBILE DROPDOWN */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-[#EEF2FF] z-[60] 2xl:z-40 opacity-0 invisible"
        id="dropdown"
        // data-cursor-img="./images/toluwani.png"
      >
        <Gradient />

        <InfoBar isHeader />

        <div className="w-fullscreen mt-5 2xl:mt-10 mx-auto px-5 md:px-10 max-w-full flex items-center justify-between relative">
          <Link href="/" data-cursor="-hidden">
            <Logo />
          </Link>

          <button data-cursor="-hidden" className="scale-[0.7] md:scale-100">
            <Hamburger
              toggled={open}
              toggle={setOpen}
              rounded
              label="Show menu"
              distance="sm"
            />
          </button>
        </div>

        <div className="w-fullscreen px-5 md:px-10 mx-auto max-w-full mt-[140px] md:mt-[80px] 2xl:mt-[142px] xl:relative">
          <div id="menu" className="font-Acorns">
            {navLinks.map((link, index) => (
              <Link
                onClick={() => setOpen(false)}
                key={index}
                href={
                  link === "updates" || link === "blog"
                    ? `/#${link}`
                    : `/${link}`
                }
                className="block font-semibold uppercase text-[48px] md:text-[70px] 2xl:text-[96px] before:transition-all before:duration-500 w-fit relative before:absolute before:contents-[' '] before:left-0 before:bottom-4 md:before:bottom-6 2xl:before:bottom-8 before:opacity-0 before:hover:opacity-100 before:h-0.5 md:before:h-1 before:w-0 before:hover:w-full before:bg-black relative z-10"
              >
                {link}
              </Link>
            ))}
          </div>
          <div
            className="absolute bottom-20 md:-bottom-10 2xl:-bottom-20 right-5 md:right-10 flex flex-col items-end gap-3 w-[240px] max-w-full ml-auto font-light md:text-xl text-right"
            id="menuLinks"
          >
            <h2 className="text-[#949494]">CONTACT</h2>
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                target="_blank"
                className="uppercase text-right underline"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
