// ArtikelCard.tsx
import React, { useState } from "react";

type Blogs = {
  title: string;
  body: string;
  author: string;
  id: number;
  date: Date;
};

type BlogsProps = {
  blogs: Blogs[];
};
// function für read mor um ganzes text anzuzeigen
const ArtikelCard: React.FC<BlogsProps> = ({ blogs }) => {
  const [showFullArticle, setShowFullArticle] = useState<number | null>(null);

  const toggleFullArticle = (blogId: number) => {
    setShowFullArticle(showFullArticle === blogId ? null : blogId);
  };
  //ende
  return (
    <div className="w-full px-10 ">
      {blogs.map((blog) => (
        <div key={blog.id} className=" ">
          {/* sepertor */}
          <div className="h-7 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
          {/* sperator ende */}

          <div className="border border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div>
              {/* title */}
              <div className="text-gray-900 font-bold text-xl mb-2">
                {blog.title}
              </div>
              {/* nur erste 100 Char anzeigen  */}
              <p className="text-gray-700 text-base">
                {showFullArticle === blog.id
                  ? blog.body
                  : `${blog.body.slice(0, 100)}...`}
              </p>
              {/* unteres teil */}
            </div>
            <div className="mb-2 flex items-center mt-8">
              <div className="text-sm">
                <p className="text-gray-900 leading-none">
                  Written By :{blog.author}
                </p>
                {/* automatisch aktuelles Datum */}
                <p className="text-gray-600">
                  {blog.date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}{" "}
                </p>
                {/* ende */}
              </div>
              <button
                className="ml-auto bg-green-500 text-white p-4 shadow-md rounded-full hover:shadow-2xl)"
                onClick={() => toggleFullArticle(blog.id)}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtikelCard;
