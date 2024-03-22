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

const socialLinks = [
  {
    title: "github",
    link: "#",
  },
  {
    title: "medium",
    link: "#",
  },
  {
    title: "linkedin",
    link: "#",
  },
  {
    title: "instagram",
    link: "#",
  },
  {
    title: "google scholar",
    link: "#",
  },
  {
    title: "INFO@TOLUWANI.EA",
    link: "#",
  },
];

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

  const isContactPage = pathname === "/contact";

  return (
    <>
      <header className="w-fullscreen mt-10 mx-auto px-10 max-w-full flex justify-between items-center">
        <Link href="/" data-cursor="-hidden">
          <Logo />
        </Link>
        {isContactPage ? (
          <InfoBar open={open} setOpen={setOpen} />
        ) : (
          <>
            <div
              className="px-5 py-[18px] bg-[#00000026] flex gap-6 rounded-[48px]"
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
            <button data-cursor="-hidden">
              <Hamburger
                toggled={open}
                toggle={setOpen}
                rounded
                label="Show menu"
                distance="sm"
                size={35}
              />
            </button>
          </>
        )}
      </header>

      {/* MOBILE DROPDOWN */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-[#EEF2FF] z-40 opacity-0 invisible"
        id="dropdown"
        // data-cursor-img="./images/toluwani.png"
      >
        <Gradient />
        <div className="w-fullscreen mt-12 mx-auto px-10 max-w-full flex justify-between">
          <Link href="/" data-cursor="-hidden">
            <Logo />
          </Link>

          <InfoBar open={open} setOpen={setOpen} />
        </div>

        <div className="w-fullscreen px-10 mx-auto max-w-full mt-[142px]">
          <div id="menu" className="font-Acorns">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={"/" + link}
                className="block font-semibold uppercase text-[96px] before:transition-all before:duration-500 w-fit relative before:absolute before:contents-[' '] before:left-0 before:bottom-8 before:opacity-0 before:hover:opacity-100 before:h-1 before:w-0 before:hover:w-full before:bg-black"
              >
                {link}
              </Link>
            ))}
          </div>
          <div
            className="-mt-40 flex flex-col items-end gap-3 w-[240px] max-w-full ml-auto font-light text-xl text-right"
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

const InfoBar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex gap-32 items-center">
      <div className="text-right space-y-1 text-sm font-light" id="info">
        <span className="flex gap-1 items-center">
          10°C  <WeatherIcon />
          <strong className="font-medium">ABU DHABI</strong> 05:05 PM
        </span>
        <span className="inline-block">
          AVAILABLE <strong className="font-medium">APRIL 2024</strong>
        </span>
        <span className="flex gap-2 items-center justify-end">
          <KiteIcon />
          <a href="mailto:info@toluwani.ea" className="font-medium">
            INFO@TOLUWANI.EA
          </a>
        </span>
      </div>
      <button data-cursor="-hidden">
        <Hamburger
          toggled={open}
          toggle={setOpen}
          rounded
          label="Show menu"
          distance="sm"
          size={35}
        />
      </button>
    </div>
  );
};

export default Header;
