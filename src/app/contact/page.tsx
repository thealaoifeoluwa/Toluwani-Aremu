// import InfoBar from "@/components/infoBar";
import Link from "next/link";
import dynamic from "next/dynamic";

const InfoBar = dynamic(() => import("@/components/infoBar"), { ssr: false });

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
];

const Page = () => {
  return (
    <>
      <div className="absolute w-full top-0 left-0">
        <div className="w-fullscreen mx-auto mt-5 2xl:mt-10 px-5 md:px-10 max-w-full relative">
          <InfoBar />
        </div>
      </div>

      <div className="w-fullscreen px-7 sm:px-10 mx-auto max-w-full mt-[120px] md:mt-[60px] 2xl:mt-[142px]">
        <div>
          <h2 className="font-light sm:text-xl text-[#949494]">CONTACT</h2>
          <h3 className="mt-3 2xl:mt-5 font-Acorns font-semibold text-[45px] 2xl:text-[65px] leading-[55px] md:leading-normal w-[293px] max-w-full sm:w-full">
            Want to work together on a <br className="hidden sm:block" />{" "}
            project ?
          </h3>
          <a
            href="mailto:info@toluwani.ea"
            className="mt-3 2xl:mt-5 inline-block font-light sm:text-[24px] 2xl:text-[32px] underline underline-offset-4"
          >
            Get in touch with me by email
          </a>
          <p className="mt-4 2xl:mt-8 font-light sm:text-[24px] 2xl:text-[32px]">
            Or follow me from a distance:
          </p>
        </div>
        <div className="mt-5 2xl:mt-14 space-y-1 2xl:space-y-2 pb-5">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              className="flex items-center gap-3 font-light sm:text-xl"
            >
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-black dark:bg-white" />
              <Link href={link.link} target="_blank" className="uppercase">
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
