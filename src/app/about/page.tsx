"use client";

import GoogleIcon from "@/icons/google";
import SpotifyIcon from "@/icons/spotify";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../../../data";
import { useDrag } from "@/hooks/useAnimation";

const Page = () => {
  useDrag();

  return (
    <div className="mt-[115px]">
      <div
        className="flex items-start gap-80 overflow-x-scroll h-[75vh] pr-20 hide-scrollbar"
        id="draggable"
      >
        <section className="min-w-[100vw] flex items-center">
          <div className="flex gap-16 items-end w-fullscreen px-10 max-w-full mx-auto">
            <div>
              <h1 className="font-Acorns font-semibold text-[65px]">ABOUT</h1>
              <p className="mt-9 text-2xl w-[425px] text-justify">
                I&apos;m <strong className="font-bold">Toluwani Aremu</strong>,
                a passionate learner and dedicated researcher specializing in
                advancing artificial intelligence with a robust skill set
                spanning both research and industry, I am well-versed in
                essential tools such as Python, PyTorch, TensorFlow, and Keras,
                among others. Proficiency extends to various Integrated
                Development Environments, including VSCode, Visual Studio, and
                PyCharm.
              </p>
              <button className="mt-16 flex gap-4 items-center text-xl">
                <GoogleIcon />
                <span className="underline underline-offset-2 inline-block">
                  GOOGLE SCHOLAR
                </span>
              </button>
            </div>
            <div className="relative">
              <Image
                src="/images/toluwani.png"
                alt="toluwani image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-auto min-w-[414px] min-h-[460px]"
              />
              <span className="absolute left-0 w-full bottom-4 grid place-content-center">
                <SpotifyIcon />
              </span>
            </div>
          </div>
        </section>

        <section className="-ml-[600px]">
          {/* -ml-32 */}
          <div className="w-[570px]">
            <h1 className="font-Acorns font-semibold text-[65px]">
              Current Exploration
            </h1>
            <p className="mt-9 text-2xl text-justify">
              I am currently exploring and developing neural networks that are
              not only safe and robust but also prioritize privacy. My focus is
              on designing these networks by drawing inspiration from human
              cognition, aiming to create AI systems that emulate the
              intricacies of human thought processes while ensuring their
              reliability and security against privacy breaches.
            </p>
          </div>
        </section>

        <section>
          <h1 className="font-Acorns font-semibold text-[65px]">
            Past Research Experience
          </h1>
          <div className="flex gap-16 mt-9">
            <div className="w-[580px] space-y-8">
              <p className="text-2xl text-justify">
                As a student at MBZUAI, I served as a Research Assistant at the
                SPriNT-AI Lab, collaborating with Dr. Karthik Nandakumar. My
                primary focus was the development of an innovative method known
                as PolyKervNets, designed to address the Accuracy-Efficiency
                challenge within Deep Neural Networks, particularly in the
                context of private inference (PI).
              </p>
              <p className="text-2xl text-justify">
                Additionally, I embarked on personal projects covering Accented
                Speech Recognition, Racial Bias Mitigation in SSLs, and Gender
                Bias Mitigation in Word Embeddings. These projects not only
                broadened my understanding of AI but also contributed to bias
                mitigation and performance enhancement in various applications.
              </p>
            </div>
            <div className="w-[580px] space-y-8">
              <p className="text-2xl text-justify">
                During my Applied Science Internship at G42, I played a pivotal
                role in developing a toolkit aimed at streamlining the
                preprocessing of the NHANES dataset, ultimately facilitating
                model utilization, result reproduction, and TRIPOD statement
                extraction.
              </p>
              <p className="text-2xl text-justify">
                Subsequently, as an AI research assistant at MBZUAI Metaverse
                Lab under the guidance of Prof. Abdulmotaleb El Saddik, I
                embarked on projects to enhance 2D classifiers in the Proactive
                Violence and Weapon Detection domain, including the leadership
                of an innovative project known as ScholarFace.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="font-Acorns font-semibold text-[65px]">Education</h1>
          <div className="w-[620px] mt-9 space-y-8">
            <p className="text-2xl text-justify">
              My academic journey includes a Bachelor of Science in Computer
              Science from Adeleke University, Nigeria, and a subsequent Master
              of Science in Computer Science from the University of Ibadan,
              Nigeria.
            </p>
            <p className="text-2xl text-justify">
              More recently, I achieved a Research-focused Master of Science in
              Machine Learning at the Mohamed Bin Zayed University of Artificial
              Intelligence in December 2022.
            </p>
            <p className="text-2xl text-justify">
              Presently, I am pursuing a PhD in Machine Learning at MBZUAI,
              working under the guidance of esteemed mentors: Prof. Abdulmotaleb
              El Saddik and Dr. Karthik Nandakumar, while also collaborating
              with Prof. Bhiksha Raj and Prof. Kun Zhang.
            </p>
          </div>
        </section>

        <section className="flex gap-16 items-end">
          <h1 className="font-Acorns font-semibold text-[65px]">GALLERY</h1>
          <div className="flex gap-5">
            <article className="overflow-clip rounded-3xl w-[840px] min-w-[840px] h-[560px] relative">
              <Image
                src="/images/gallery.png"
                alt="gallery"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full absolute inset-0 transition-all duration-1000 hover:scale-105"
              />
            </article>
            <div className="space-y-5">
              <div className="flex gap-5 h-[270px]">
                <article className="overflow-clip rounded-3xl relative h-full w-[385px]">
                  <Image
                    src="/images/gallery-1.png"
                    alt="gallery"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full absolute inset-0 transition-all duration-1000 hover:scale-105"
                  />
                </article>
                <article className="overflow-clip rounded-3xl relative h-full w-[784px]">
                  <Image
                    src="/images/gallery-2.png"
                    alt="gallery"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full absolute inset-0 transition-all duration-1000 hover:scale-105"
                  />
                </article>
                <article className="overflow-clip rounded-3xl relative h-full w-[306px]">
                  <Image
                    src="/images/gallery-3.png"
                    alt="gallery"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full absolute inset-0 transition-all duration-1000 hover:scale-105"
                  />
                </article>
              </div>
              <div className="flex gap-5 h-[270px]">
                <article className="overflow-clip rounded-3xl relative h-full w-[784px]">
                  <Image
                    src="/images/gallery-4.png"
                    alt="gallery"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full absolute inset-0 transition-all duration-1000 hover:scale-105"
                  />
                </article>
                <article className="overflow-clip rounded-3xl relative h-full w-[383px]">
                  <Image
                    src="/images/gallery-5.png"
                    alt="gallery"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full absolute inset-0 transition-all duration-1000 hover:scale-105"
                  />
                </article>
                <article className="overflow-clip rounded-3xl relative h-full w-[306px]">
                  <Image
                    src="/images/gallery-6.png"
                    alt="gallery"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full absolute inset-0 transition-all duration-1000 hover:scale-105"
                  />
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="pr-40">
          <h1 className="font-Acorns font-semibold text-[65px] text-right">
            SOCIAL
          </h1>
          <p className="w-[170px] text-right ml-auto text-2xl mt-8">
            I am open to collaborations and can be reached through
          </p>

          <div className="mt-16 flex flex-col items-end gap-3 w-[240px] max-w-full ml-auto font-light text-xl text-right">
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
        </section>
      </div>
    </div>
  );
};

export default Page;
