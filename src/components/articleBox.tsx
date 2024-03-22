import Image from "next/image";

const ArticleBox = () => {
  return (
    <article className="w-[390px] min-w-fit h-[330px] p-5 bg-white rounded-[10px]">
      <Image
        src="/images/blog.png"
        alt="blog image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[202px] object-cover rounded-xl"
      />
      <h2 className="my-[14px] font-Acorns font-medium">
        16 Facts about artificial intelligence and our world
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
          <span>18 January 2024</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleBox;
