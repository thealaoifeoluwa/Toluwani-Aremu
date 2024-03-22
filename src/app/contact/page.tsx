import Link from "next/link";

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
    <div className="w-fullscreen px-10 mx-auto max-w-full mt-[142px]">
      <div id="menu">
        <h2 className="font-light text-xl text-[#949494]">CONTACT</h2>
        <h3 className="mt-5 w-[840px] max-w-full font-Acorns font-semibold text-[65px]">
          Want to work together on a project ?
        </h3>
        <a
          href="mailto:info@toluwani.ea"
          className="mt-5 inline-block font-light text-[32px] underline"
        >
          Get in touch with me by email
        </a>
        <p className="mt-8 font-light text-[32px]">
          Or follow me from a distance:
        </p>
      </div>
      <div className="mt-14 space-y-2" id="menuLinks">
        {socialLinks.map((link, index) => (
          <div
            key={index}
            className="flex items-center gap-3 font-light text-xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-black" />
            <Link href={link.link} target="_blank" className="uppercase">
              {link.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
