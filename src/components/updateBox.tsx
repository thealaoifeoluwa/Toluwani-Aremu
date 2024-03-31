import { allData } from "../../data";

const UpdateBox = ({ yearSelected }: { yearSelected: number }) => {
  return (
    <div className="w-[880px] text-sm md:text-base bg-[#B4B3B326] backdrop-blur-md max-w-full mx-auto border border-primary rounded-[30px] md:rounded-[48px] flex overflow-hidden">
      {allData.map((data, index) => {
        const { contents, year } = data;

        return (
          <article
            key={index}
            className={`space-y-4 relative transition-all duration-700 ${
              yearSelected === year
                ? "opacity-100 min-w-full h-auto overflow-visible px-5 md:px-10 py-7"
                : "opacity-0 w-0 h-0 overflow-hidden px-0 py-0"
            } ${
              yearSelected > year
                ? "-translate-x-20"
                : yearSelected < year
                ? "translate-x-20"
                : "translate-x-0"
            }`}
          >
            {contents.map((info, index) => {
              const { data, title } = info;

              return (
                <div key={index}>
                  <h3 className="font-bold">{title}</h3>

                  <ul className="list-disc ml-8">
                    {data.map((li, index) => (
                      <li key={index}>
                        {li.text}
                        {li.link && (
                          <a
                            href={li.link}
                            className="text-primary inline-block ml-2"
                          >
                            [{li.linkTitle ? li.linkTitle : "Read"}]
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </article>
        );
      })}
    </div>
  );
};

export default UpdateBox;
