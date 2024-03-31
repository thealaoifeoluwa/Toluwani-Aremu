"use client";

import ArticleBox from "@/components/articleBox";
import UpdateBox from "@/components/updateBox";
import { useDrag } from "@/hooks/useAnimation";
import MailIcon from "@/icons/mail";
import MailIcon2 from "@/icons/mail2";
import StarIcon from "@/icons/star";
import Image from "next/image";
import { useEffect, useState } from "react";

const years = [
  2012, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
];

export default function Home() {
  useDrag();
  const [yearSelected, setYearSelected] = useState(2015);

  // useEffect(() => {
  //   const yearsCont = document.querySelector("#years-cont")!;

  //   yearsCont.scrollLeft += 50;
  // }, [yearSelected]);

  return (
    <main className="pb-32">
      <div className="mt-[95px] flex flex-col gap-14 justify-center items-center">
        <div className="relative">
          <Image
            src="/images/toluwani.png"
            alt="toluwani image"
            width={0}
            height={0}
            sizes="100vw"
            className="md:w-auto h-auto min-w-[170px] w-[170px] md:min-w-[350px] 2xl:min-w-[460px]"
          />
          <span className="absolute -right-2 md:-right-5 -top-2 md:-top-5">
            <StarIcon />
          </span>
          <div className="absolute top-32 md:top-60 2xl:top-80 left-1/2 -translate-x-1/2 font-Acorns">
            <h1 className="text-[45px] min-[385px]:text-[52px] md:text-[90px] 2xl:text-[128px] leading-[40px] md:leading-[105px] text-nowrap text-stroke-1 md:text-stroke-2 text-center font-semibold">
              Toluwani Aremu
            </h1>
            <span className="block text-right text-[8.5px] md:text-[20px] text-gray-500 min-[385px]:text-black">
              Seeking AI... responsibly!
            </span>
          </div>
        </div>
        <p className="w-[425px] max-w-full px-10 text-center md:text-xl">
          I&apos;m a passionate learner and dedicated researcher specializing in
          advancing artificial intelligence with a robust skill set spanning
          both research and industry.
        </p>
        <button
          className="btn flex items-center gap-3 group"
          data-cursor="-hidden"
        >
          <MailIcon />
          Say Hi!
        </button>
      </div>

      <div className="mt-[74px] md:mt-[120px] text-center">
        <h2 className="text-[32px] md:text-[64px] font-medium font-Acorns">
          Skillset
        </h2>
        <p className="md:text-xl">
          I am well-versed in essential tools such as
        </p>
        <div className="flex justify-center gap-2.5 mt-4 md:text-xl">
          <span className="btn">Python</span>
          <span className="btn">PyTorch</span>
          <span className="btn">TensorFlow</span>
          <span className="btn">Keras</span>
        </div>
        <p className="mt-10 md:text-xl">Development Environments</p>
        <div className="flex justify-center gap-2.5 mt-4 md:text-xl">
          <span className="btn">VSCode</span>
          <span className="btn">Visual Studio</span>
          <span className="btn">PyCharm</span>
        </div>
      </div>

      <div className="mt-[102px] px-5">
        <h2 className="text-[32px] md:text-[64px] font-medium font-Acorns text-center">
          Update
        </h2>

        <div className="mt-6 md:mt-8 w-[380px] max-w-full mx-auto overflow-hidden relative rounded-full">
          <span className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black/5 to-transparent pointer-events-none"></span>
          <span className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black/5 to-transparent pointer-events-none"></span>
          <div
            className="flex py-3 gap-1 px-5 overflow-x-scroll hide-scrollbar scroll-smooth"
            id="years-cont"
          >
            {years.map((year, index) => (
              <button
                onClick={() => setYearSelected(year)}
                key={index}
                className={`rounded-2xl text-lg md:text-xl outline-none px-3 py-2 transition-colors duration-500 ${
                  yearSelected === year
                    ? "bg-primary text-white"
                    : "bg-transparent text-black"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <UpdateBox yearSelected={yearSelected} />
        </div>
      </div>

      <div className="mt-[102px] text-center">
        <h2 className="text-[32px] md:text-[64px] font-medium font-Acorns">
          Blog
        </h2>
        <p className="mt-4 w-[640px] max-w-full mx-auto md:text-2xl font-Acorns px-10">
          Some thoughts, reflections, & notes on artificial intelligence and
          development, along with some latest work in progress.
        </p>

        <div className="overflow-hidden">
          <div
            className="mt-14 flex gap-4 overflow-x-scroll px-5 sm:px-10 hide-scrollbar"
            id="draggable"
          >
            {[...Array(8)].map((data, index) => (
              <ArticleBox key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[102px] text-center px-5 sm:px-10">
        <h2 className="text-[32px] md:text-[64px] font-medium font-Acorns">
          Let’s work together
        </h2>
        <p className="mt-8 font-light md:text-xl w-[730px] max-w-full mx-auto text-center">
          If you&apos;d like to talk about a project you want help with or need
          an advice about research on artificial intelligence, just drop me a
          message at <strong className="font-bold">toluwani@aremu.ai</strong>
          <br />
          I&apos;m currently available for any form of artificial intelligence
          research gigs.
        </p>

        <div className="mt-16 flex flex-col gap-4 justify-center items-center">
          <MailIcon2 />
          <a href="mailto:toluwani@aremu.ai" className="md:text-xl font-light">
            WRITE ME AN EMAIL
          </a>
        </div>
      </div>
    </main>
  );
}
