"use client";

import useAbuDhabiTime from "@/hooks/useAbuDhabiTime";
import KiteIcon from "@/icons/kite";
import WeatherIcon from "@/icons/weather";
import Image from "next/image";
import { useEffect, useState } from "react";

type WeatherType = {
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
  };
};

const InfoBar = ({
  hideOnMobile,
  isHeader,
}: {
  hideOnMobile?: boolean;
  isHeader?: boolean;
}) => {
  const [data, setData] = useState({
    temp: 0,
    icon: "/images/icon.svg",
    description: "clear sky",
  });

  const { amPM, formattedHour, formattedMinute, formattedSecond, month, year } =
    useAbuDhabiTime();

  useEffect(() => {
    const API_KEY = process.env.API_KEY;
    const city = "Abu Dhabi";

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        const res = await response.json();

        if (res.cod === 401) return;

        const { weather, main } = res;
        let { icon, description } = weather[0];
        const temp = Math.round(main.temp - 273);
        icon = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        setData({ description, icon, temp });
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div
      className={`absolute top-20 md:top-0 right-8 md:right-60 ${
        hideOnMobile ? "hidden md:block" : ""
      }`}
    >
      <div
        className="text-right space-y-1 text-xs md:text-sm font-light"
        id={isHeader ? "info" : ""}
      >
        <div className="flex gap-1 -mb-2 items-center justify-end capitalize">
          {data.temp}°C  <span className="font-medium">{data.description}</span>
          <Image
            src={data.icon}
            alt="icon"
            width={0}
            height={0}
            sizes="100vw"
            className="w-10 h-10 -mx-2"
          />
        </div>
        <div className="text-right">
          <strong className="font-medium">ABU DHABI</strong>{" "}
          <span className="min-w-[76px] inline-block">
            {formattedHour}:{formattedMinute}:{formattedSecond} {amPM}
          </span>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <span className="w-3 h-3 rounded-full bg-[#00FF66]"></span>
          AVAILABLE{" "}
          <strong className="font-medium uppercase">
            {month} {year}
          </strong>
        </div>
        <span className="flex gap-2 items-center justify-end">
          <KiteIcon />
          <a href="mailto:tioluwaniaremu@gmail.com" className="font-medium">
            INFO@TOLUWANI.EA
          </a>
        </span>
      </div>
    </div>
  );
};

export default InfoBar;
