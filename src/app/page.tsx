"use client";

import ArticleBox from "@/components/articleBox";
import UpdateBox from "@/components/updateBox";
import { useDrag } from "@/hooks/useAnimation";
import MailIcon from "@/icons/mail";
import MailIcon2 from "@/icons/mail2";
import StarIcon from "@/icons/star";
import Image from "next/image";
import { useEffect, useState } from "react";
import { blogs, years } from "../../data";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { LinkedinIcon } from "@/icons/socialIcons";

export default function Home() {
  useDrag();
  const [yearSelected, setYearSelected] = useState(2024);

  const [loaded, setLoaded] = useState(true);
  const [typingDone, setTypingDone] = useState(true);

  useEffect(() => {
    const yearsCont = document.querySelector("#years-cont")!;

    if (typingDone) {
      yearsCont.scrollLeft += 1000;
    }
  }, [typingDone]);

  const scrollContainer = (value: number) => {
    const yearsCont = document.querySelector("#years-cont")!;

    if (value > yearSelected) {
      const range = value - yearSelected;
      yearsCont.scrollLeft += 50 * range;
    } else {
      const range = yearSelected - value;
      yearsCont.scrollLeft -= 50 * range;
    }
  };

  useEffect(() => {
    const loader = document.querySelector("#loader");

    if (loader?.classList.contains("close")) {
      return;
    }

    setLoaded(false);
    setTypingDone(false);

    const timeout = setTimeout(() => {
      setLoaded(true);

      setTimeout(() => {
        setTypingDone(true);
      }, 1800);
    }, 6500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="pb-32 min-h-[110vh]">
      <div className="mt-[95px] flex flex-col gap-14 justify-center items-center">
        <div className="relative">
          {typingDone && (
            <div data-aos="fade-up">
              <Image
                src="/images/toluwani.png"
                alt="toluwani image"
                width={0}
                height={0}
                sizes="100vw"
                className="md:w-auto h-auto min-w-[170px] w-[170px] md:min-w-[350px] 2xl:min-w-[460px]"
                priority
              />
              <span className="absolute -right-2 md:-right-5 -top-2 md:-top-5">
                <StarIcon />
              </span>
            </div>
          )}
          <div className="absolute top-32 md:top-60 2xl:top-80 left-1/2 -translate-x-1/2 min-w-[300px] md:min-w-[500px] font-Acorns">
            <h1 className="text-[45px] min-[385px]:text-[52px] md:text-[90px] 2xl:text-[128px] leading-[40px] md:leading-[105px] text-nowrap text-stroke-1 md:text-stroke-2 text-center font-semibold title">
              {/* Toluwani Aremu */}
              {loaded && (
                <Typewriter
                  words={["Toluwani Aremu"]}
                  loop={1}
                  typeSpeed={100}
                />
              )}
            </h1>
            {typingDone && (
              <span
                className="block text-right text-xs md:text-[20px] text-primary"
                data-aos="fade-up"
              >
                Seeking AI... responsibly!
              </span>
            )}
          </div>
        </div>
      </div>

      {typingDone && (
        <div>
          <div className="space-y-14 mt-14">
            <p
              className="w-[425px] max-w-full px-10 md:px-0 text-center mx-auto md:text-xl"
              data-aos="fade-up"
            >
              I&apos;m a passionate learner and dedicated researcher
              specializing in advancing artificial intelligence with a robust
              skill set spanning both research and industry.
            </p>
            <Link
              href="mailto:tioluwaniaremu@gmail.com"
              data-aos="fade-up"
              className="btn flex items-center w-fit mx-auto gap-3 group"
              data-cursor="-hidden"
            >
              <MailIcon />
              Say Hi!
            </Link>
          </div>

          <div className="mt-[74px] md:mt-[120px] text-center">
            <h2
              className="text-[32px] md:text-[64px] font-medium font-Acorns"
              data-aos="fade-up"
            >
              Skillset
            </h2>
            <p className="md:text-xl" data-aos="fade-up">
              Here are some tools I work with
            </p>
            <div
              className="flex justify-center gap-2 sm:gap-2.5 mt-4 md:text-xl"
              data-aos="fade-up"
            >
              <span className="btn">Python</span>
              <span className="btn">PyTorch</span>
              <span className="btn">TensorFlow</span>
              <span className="btn">Github</span>
            </div>
            {/* <p className="mt-10 md:text-xl" data-aos="fade-up">
              Development Environments
            </p> */}
            <div
              className="flex justify-center gap-2 sm:gap-2.5 mt-4 md:text-xl"
              data-aos="fade-up"
            >
              <span className="btn">VSCode</span>
              <span className="btn">Visual Studio</span>
              <span className="btn">PyCharm</span>
            </div>
          </div>

          <div className="mt-[102px] px-5">
            <h2
              className="text-[32px] md:text-[64px] font-medium font-Acorns text-center"
              id="updates"
              data-aos="fade-up"
            >
              Update
            </h2>

            <div
              className="mt-6 md:mt-8 w-[380px] max-w-full mx-auto overflow-hidden relative rounded-full"
              data-aos="fade-up"
            >
              <span className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black/10 dark:from-black/30 to-transparent pointer-events-none"></span>
              <span className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black/10 dark:from-black/30 to-transparent pointer-events-none"></span>
              <div
                className="flex py-3 gap-1 px-5 overflow-x-scroll hide-scrollbar scroll-smooth"
                id="years-cont"
              >
                {years.map((year, index) => (
                  <button
                    onClick={() => {
                      scrollContainer(year);
                      setYearSelected(year);
                    }}
                    key={index}
                    className={`rounded-2xl text-lg md:text-xl outline-none px-3 py-2 transition-colors duration-500 ${
                      yearSelected === year
                        ? "bg-primary text-white"
                        : "bg-transparent text-black dark:text-gray-500"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5" data-aos="fade-up">
              <UpdateBox yearSelected={yearSelected} />
            </div>
          </div>

          <div className="mt-[102px] text-center">
            <h2
              className="text-[32px] md:text-[64px] font-medium font-Acorns"
              id="blog"
              data-aos="fade-up"
            >
              Blog
            </h2>
            <p
              className="mt-4 w-[640px] max-w-full mx-auto md:text-2xl font-Acorns px-10 md:px-0"
              data-aos="fade-up"
            >
              Some thoughts, reflections, & notes on artificial intelligence and
              development, along with some latest work in progress.
            </p>

            <div className="overflow-hidden" data-aos="fade-up">
              <div
                className="mt-14 flex gap-4 overflow-x-scroll px-5 sm:px-10 hide-scrollbar"
                id="draggable"
              >
                {blogs.map((data, index) => (
                  <ArticleBox key={index} data={data} />
                ))}
              </div>
            </div>
          </div>

          <div
              className="mt-16 flex flex-col gap-4 justify-center items-center"
              data-aos="fade-up"
            >
              <Link
                href="https://tolusophy.medium.com/"
                className="md:text-xl font-light  text-primary"
              >
                Read more..
              </Link>
            </div>

          <div className="mt-[102px] text-center px-5 sm:px-10">
            <h2
              className="text-[32px] md:text-[64px] font-medium font-Acorns"
              data-aos="fade-up"
            >
              Let’s work together
            </h2>
            <p
              className="mt-2 font-light md:text-xl w-[730px] max-w-full mx-auto text-center"
              data-aos="fade-up"
            >
              Got a cool research idea or just want to muse about the future? Hit me up!{" "}
              {/* <strong className="font-bold">toluwani@aremu.ai</strong>
              <br /> */}
              I&apos;m currently available for any form of artificial
              intelligence research gigs.
            </p>

            <div
              className="mt-16 flex flex-col gap-4 justify-center items-center"
              data-aos="fade-up"
            >
              <LinkedinIcon />
              <Link
                href="https://linkedin.com/in/toluwaniaremu"
                className="md:text-xl font-light"
              >
                CONTACT ME ON LINKEDIN
              </Link>
            </div>

            <div
              className="mt-16 flex flex-col gap-4 justify-center items-center"
              data-aos="fade-up"
            >
              <MailIcon2 />
              <Link
                href="mailto:tioluwaniaremu@gmail.com"
                className="md:text-xl font-light"
              >
                WRITE ME AN EMAIL
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
