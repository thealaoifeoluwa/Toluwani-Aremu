import Image from "next/image";
import { blogs } from "../data";
import Link from "next/link";

const ArticleBox = ({ data }: { data: (typeof blogs)[0] }) => {
  const { date, image, link, title } = data;

  return (
    <Link
      href={link}
      target="_blank"
      className="w-[390px] min-w-[300px] md:min-w-[390px] h-full p-3 sm:p-5 bg-white dark:bg-[#1B1B1B] rounded-[10px]"
    >
      <Image
        src={"/images/blogs" + image}
        alt={"image for " + title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[150px] sm:h-[202px] object-cover rounded-xl"
      />
      <h2 className="my-[14px] min-h-12 md:min-h-[auto] font-Acorns font-medium text-left">
        {title}
      </h2>
      <div className="flex items-center gap-2">
        <Image
          src="/images/toluwani.png"
          alt="blog image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-8 h-8 object-cover border-[0.6px] border-primary rounded-md"
        />
        <div className="text-xs">
          <span className="block text-primary">Toluwani Aremu</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleBox;
