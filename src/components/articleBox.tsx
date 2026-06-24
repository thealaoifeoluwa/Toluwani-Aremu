import Image from "next/image";
import { blogs } from "../data";
import Link from "next/link";

const ArticleBox = ({ data }: { data: (typeof blogs)[0] }) => {
  const { authors, image, link, title, venue, year, extraLinks } = data as any;

  return (
    <div
      className="w-[390px] min-w-[300px] md:min-w-[390px] min-h-[380px] p-3 sm:p-5 bg-white dark:bg-[#1B1B1B] rounded-[10px] flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 hover:glow-accent-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 dark:focus-within:ring-offset-black"
    >
      <Link href={link} target="_blank" className="flex flex-col flex-grow outline-none">
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
      </Link>
      {(authors || venue || year || extraLinks) && (
        <div className="text-xs space-y-2 mt-auto">
          {authors && (
            <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
              {authors.join(", ")}
            </p>
          )}
          {(venue || year || extraLinks) && (
            <div className="flex justify-between items-center pt-2 gap-2 border-t border-gray-200 dark:border-gray-700">
              <span className="text-primary font-medium text-left">{venue || ""}</span>
              
              {extraLinks && (
                <div className="flex gap-2 justify-center">
                  {(extraLinks as { name: string; url: string }[]).map((ext, idx) => (
                    <Link key={idx} href={ext.url} target="_blank" className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors whitespace-nowrap text-[10px] sm:text-xs">
                      {ext.name}
                    </Link>
                  ))}
                </div>
              )}

              <span className="text-gray-500 dark:text-gray-400 text-right whitespace-nowrap">{year || ""}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ArticleBox;
