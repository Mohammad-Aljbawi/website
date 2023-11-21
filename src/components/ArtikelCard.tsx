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
              <div className="text-gray-900 font-bold text-2xl mb-5 text-center">
                {blog.title}
              </div>
              {/* nur erste 100 Char anzeigen  */}
              <p className="text-gray-700 text-base font-bold">
                {showFullArticle === blog.id
                  ? blog.body
                  : `${blog.body.slice(0, 100)}...`}
              </p>
              
            </div>
            {/* unteres Teil */} 
            <div className="mb-0 flex items-center mt-8">
              <div className="text-sm font-bold">
                <p className="text-gray-900 leading-none">
                  <p className="font-bold"> Written By :</p>
                  <p className="font-semibold">{blog.author}</p>
                </p>
                {/* automatisch aktuelles Datum */}
                <p className="text-gray-900">
                  <p className="font-bold"> Published:</p>
                  <p className="font-semibold">
                    {blog.date.toLocaleDateString("DE", {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </p>
                {/* ende */}
              </div>
              <button
                className="ml-auto mb-0 bg-green-500 text-white p-3 shadow-md rounded-full hover:shadow-2xl)"
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
