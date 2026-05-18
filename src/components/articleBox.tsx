import Image from "next/image";
import { blogs } from "../data";
import Link from "next/link";

const ArticleBox = ({ data }: { data: (typeof blogs)[0] }) => {
  const { authors, image, link, title, venue, year } = data;

  return (
    <Link
      href={link}
      target="_blank"
      className="w-[390px] min-w-[300px] md:min-w-[390px] h-[380px] p-3 sm:p-5 bg-white dark:bg-[#1B1B1B] rounded-[10px] flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 hover:glow-accent-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-black"
    >
      <Image
        src={"/images/blogs" + image}
        alt={"image for " + title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[200px] object-cover rounded-xl"
      />
      <h2 className="my-[14px] flex-grow font-Acorns font-medium text-center line-clamp-3">
        {title}
      </h2>
      {(authors || venue || year) && (
        <div className="text-xs space-y-1">
          {authors && (
            <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
              {authors.join(", ")}
            </p>
          )}
          {(venue || year) && (
            <div className="flex justify-between items-center pt-1 border-t border-gray-200 dark:border-gray-700">
              {venue && <span className="text-primary font-medium">{venue}</span>}
              {year && <span className="text-gray-500 dark:text-gray-400">{year}</span>}
            </div>
          )}
        </div>
      )}
    </Link>
  );
};

export default ArticleBox;
