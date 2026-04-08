"use client";

import GoogleIcon from "@/icons/google";
import SpotifyIcon from "@/icons/spotify";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../../data";
import { useDrag } from "@/hooks/useAnimation";
// import InfoBar from "@/components/infoBar";
import dynamic from "next/dynamic";

const InfoBar = dynamic(() => import("@/components/infoBar"), { ssr: false });

const Page = () => {
  useDrag();

  return (
    <>
      <div className="absolute w-full top-0 left-0">
        <div className="w-fullscreen mx-auto mt-5 2xl:mt-10 px-5 md:px-10 max-w-full relative">
          <InfoBar hideOnMobile />
        </div>
      </div>

      <div className="pt-[70px] md:pt-[115px] overflow-hidden md:overflow-visible">
        <div
          className="flex flex-col md:flex-row items-start gap-20 md:gap-52 2xl:gap-80 md:overflow-x-scroll md:h-[77vh] md:pr-20 hide-scrollbar"
          // id={document.documentElement.clientWidth > 768 ? "draggable" : ""}
          id="draggable"
        >
          <section className="2xl:min-w-[100vw] flex items-center relative pt-20 md:pt-0">
            <div className="flex flex-col-reverse md:flex-row md:gap-16 2xl:w-fullscreen px-5 md:px-10 max-w-full mx-auto">
              <div>
                <h1
                  className="font-Acorns font-semibold text-[36px] md:text-[45px] 2xl:text-[65px] absolute md:static top-0 left-5"
                  data-aos="fade-up"
                >
                  ABOUT
                </h1>
                <p
                  className="mt-5 2xl:mt-9 md:text-lg 2xl:text-2xl md:w-[425px] text-justify"
                  data-aos="fade-up"
                >
                  Hi! I&apos;m <strong className="font-bold">Toluwani</strong>, a 
                  curiosity-powered human on a never-ending quest to understand 
                  human and artificial minds, why we make the choices we do, 
                  what freedom truly means, and how we can align intelligence 
                  with intention. I ask big questions, follow weird thoughts, 
                  and believe the most fascinating answers are the ones that lead 
                  to even better questions. If you&apos;re into brains, philosophy, or 
                  figuring out how AI can be less of a black box and more of a 
                  trustworthy companion, we&apos;ll get along just fine.
                </p>
                <Link
                  href="https://scholar.google.com/citations?user=Ji8fnw0AAAAJ&hl=en"
                  className="mt-7 md:mt-16 flex gap-2 md:gap-4 items-center md:text-xl"
                  data-aos="fade-up"
                >
                  <GoogleIcon />
                  <span className="underline underline-offset-2 inline-block">
                    GOOGLE SCHOLAR
                  </span>
                </Link>
              </div>
              <div className="relative flex w-fit items-end" data-aos="fade-up">
                <Image
                  src="/images/tolu.png"
                  alt="toluwani image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto min-w-[185px] md:min-w-[370px] 2xl:min-w-[414px]"
                />
                <span className="absolute left-2 right-2 bottom-2 2xl:bottom-4 grid place-content-center">
                  <SpotifyIcon />
                </span>
              </div>
            </div>
          </section>

          <section className="2xl:-ml-[600px] px-5 md:px-0">
            {/* -ml-32 */}
            <div className="md:w-[570px]">
              <h1
                className="font-Acorns font-semibold text-[36px] md:text-[45px] 2xl:text-[65px]"
                data-aos="fade-up"
              >
                Current Exploration
              </h1>
              <p
                className="mt-5 2xl:mt-9 md:text-lg 2xl:text-2xl text-justify"
                data-aos="fade-up"
              >
                I aim to build Safe and Trustworthy Generative AI Systems. Specifically, 
                I am currently exploring watermarking in LLMs and the alignment problems that 
                comes from the use of watermarks. I am also interested in the exploring the 
                societal impacts of deployed AI systems.
              </p>
              <p
                className="mt-4 2xl:mt-4 md:text-lg 2xl:text-2xl text-justify"
                data-aos="fade-up"
              >
                I am also working on and open to collaborations in various
                domains, including, but not limited to:
              </p>
              <ul className="md:text-lg  2xl:text-2xl list-disc ml-7 sm:ml-10 text-justify">
                <li data-aos="fade-up"> <strong>AI Debate</strong></li>
                <li data-aos="fade-up"> <strong>Self-Alignment</strong></li>
                <li data-aos="fade-up"><strong>Multi-Agent Alignment</strong></li>
                <li data-aos="fade-up"><strong>Threat models for LLM watermarks</strong></li>
                <li data-aos="fade-up"><strong>AI Ethics, Policy, and Governance</strong></li>
              </ul>
              <p
                className="pt-4 md:text-lg 2xl:text-2xl text-justify"
                data-aos="fade-up"
              >
                Feel free to reach out if you have an idea or project where we
                can collaborate!
              </p>
            </div>
          </section>

          <section className="px-5 md:px-0">
            <h1
              className="font-Acorns font-semibold text-[36px] md:text-[45px] 2xl:text-[65px]"
              data-aos="fade-up"
            >
              Past Research Experience
            </h1>
            <div
              className="flex flex-col md:flex-row gap-5 md:gap-16 mt-5 2xl:mt-9"
              data-aos="fade-up"
            >
              <div className="md:w-[580px] space-y-5 2xl:space-y-9">
                <p
                  className="md:text-lg 2xl:text-2xl text-justify"
                  data-aos="fade-up"
                >
                  As a student at MBZUAI, I served as a Research Assistant at
                  the SPriNT-AI Lab, collaborating with Dr. Karthik Nandakumar.
                  My primary focus was the development of an innovative method
                  known as PolyKervNets, designed to address the
                  Accuracy-Efficiency challenge within Deep Neural Networks,
                  particularly in the context of private inference (PI).
                </p>
                <p
                  className="md:text-lg 2xl:text-2xl text-justify"
                  data-aos="fade-up"
                >
                  Additionally, I embarked on personal projects covering
                  Accented Speech Recognition, Racial Bias Mitigation in SSLs,
                  and Gender Bias Mitigation in Word Embeddings. These projects
                  not only broadened my understanding of AI but also contributed
                  to bias mitigation and performance enhancement in various
                  applications.
                </p>
              </div>
              <div className="md:w-[580px] space-y-5 2xl:space-y-9">
                <p
                  className="md:text-lg 2xl:text-2xl text-justify"
                  data-aos="fade-up"
                >
                  During my Applied Science Internship at G42, I played a
                  pivotal role in developing a toolkit aimed at streamlining the
                  preprocessing of the NHANES dataset, ultimately facilitating
                  model utilization, result reproduction, and TRIPOD statement
                  extraction.
                </p>
                <p
                  className="md:text-lg 2xl:text-2xl text-justify"
                  data-aos="fade-up"
                >
                  Subsequently, as an AI research assistant at MBZUAI Metaverse
                  Lab under the guidance of Prof. Abdulmotaleb El Saddik, I
                  embarked on projects to enhance 2D classifiers in the
                  Proactive Violence and Weapon Detection domain, including the
                  leadership of an innovative project known as ScholarFace.
                </p>
              </div>
            </div>
          </section>

          <section className="px-5 md:px-0">
            <h1
              className="font-Acorns font-semibold text-[36px] md:text-[45px] 2xl:text-[65px]"
              data-aos="fade-up"
            >
              Education
            </h1>
            <div className="md:w-[620px] mt-5 2xl:mt-9 space-y-5 2xl:space-y-9">
              <p
                className="md:text-lg 2xl:text-2xl text-justify"
                data-aos="fade-up"
              >
                My academic journey includes a Bachelor of Science in Computer
                Science from Adeleke University, Nigeria, and a subsequent
                Master of Science in Computer Science from the University of
                Ibadan, Nigeria.
              </p>
              <p
                className="md:text-lg 2xl:text-2xl text-justify"
                data-aos="fade-up"
              >
                More recently, I achieved a Research-focused Master of Science
                in Machine Learning at the Mohamed Bin Zayed University of
                Artificial Intelligence in December 2022.
              </p>
              <p
                className="md:text-lg 2xl:text-2xl text-justify"
                data-aos="fade-up"
              >
                Presently, I am pursuing a PhD in Machine Learning at MBZUAI,
                working under the guidance of Dr. Nils Lukas.
              </p>
            </div>
          </section>

          <section
            className="flex flex-col md:flex-row gap-5 md:gap-16 md:items-end"
            // id={document.documentElement.clientWidth < 768 ? "draggable" : ""}
          >
            <h1
              className="font-Acorns font-semibold text-[36px] md:text-[45px] 2xl:text-[65px] px-5 md:px-0"
              data-aos="fade-up"
            >
              GALLERY
            </h1>
            <div
              className="flex gap-2 md:gap-5 overflow-x-scroll md:overflow-visible w-screen md:w-auto px-5 md:px-0 hide-scrollbar"
              data-aos="fade-up"
            >
              <article className="overflow-clip rounded-xl md:rounded-3xl min-w-[370px] w-[370px] md:w-[840px] md:min-w-[840px] h-[250px] md:h-[450px] 2xl:h-[560px] relative">
                <Image
                  src="/images/gallery.png"
                  alt="gallery"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full absolute inset-0 object-cover transition-all duration-1000 hover:scale-105"
                />
              </article>
              <div className="space-y-2 md:space-y-5">
                <div className="flex gap-2 md:gap-5 h-[121px] md:h-[215px] 2xl:h-[270px]">
                  <article className="overflow-clip rounded-xl md:rounded-3xl relative h-full w-[170px] md:w-[385px]">
                    <Image
                      src="/images/gallery-1.png"
                      alt="gallery"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full absolute inset-0 object-cover transition-all duration-1000 hover:scale-105"
                    />
                  </article>
                  <article className="overflow-clip rounded-xl md:rounded-3xl relative h-full w-[347px] md:w-[784px]">
                    <Image
                      src="/images/gallery-2.png"
                      alt="gallery"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full absolute inset-0 object-cover transition-all duration-1000 hover:scale-105"
                    />
                  </article>
                  <article className="overflow-clip rounded-xl md:rounded-3xl relative h-full w-[135px] md:w-[306px]">
                    <Image
                      src="/images/gallery-3.png"
                      alt="gallery"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full absolute inset-0 object-cover transition-all duration-1000 hover:scale-105"
                    />
                  </article>
                </div>
                <div className="flex gap-2 md:gap-5 h-[121px] md:h-[215px] 2xl:h-[270px]">
                  <article className="overflow-clip rounded-xl md:rounded-3xl relative h-full w-[347px] md:w-[784px]">
                    <Image
                      src="/images/gallery-4.png"
                      alt="gallery"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full absolute inset-0 object-cover transition-all duration-1000 hover:scale-105"
                    />
                  </article>
                  <article className="overflow-clip rounded-xl md:rounded-3xl relative h-full w-[170px] md:w-[383px]">
                    <Image
                      src="/images/gallery-5.png"
                      alt="gallery"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full absolute inset-0 object-cover transition-all duration-1000 hover:scale-105"
                    />
                  </article>
                  <article className="overflow-clip rounded-xl md:rounded-3xl relative h-full w-[135px] md:w-[306px]">
                    <Image
                      src="/images/gallery-6.png"
                      alt="gallery"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full absolute inset-0 object-cover transition-all duration-1000 hover:scale-105"
                    />
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 md:px-0 pb-20 md:pb-0 2xl:pr-40">
            <h1
              className="font-Acorns font-semibold text-[36px] md:text-[45px] 2xl:text-[65px] md:text-right"
              data-aos="fade-up"
            >
              SOCIAL
            </h1>
            <p
              className="w-[170px] md:text-right md:ml-auto md:text-lg 2xl:text-2xl mt-5 2xl:mt-9"
              data-aos="fade-up"
            >
              I am open to collaborations and can be reached through
            </p>

            <div
              className="mt-9 2xl:mt-16 flex flex-col md:items-end gap-2 2xl:gap-3 w-[240px] max-w-full ml-auto font-light text-lg 2xl:text-xl md:text-right"
              data-aos="fade-up"
            >
              <h2 className="text-[#949494]">CONTACT</h2>

              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  target="_blank"
                  className="uppercase md:text-right underline"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
