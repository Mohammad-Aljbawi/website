// BlogList.tsx
import React, { useState } from "react";
import ArtikelCard from "../layouts/ArtikelCard";
type Blogs = {
  title: string;
  body: string;
  author: string;
  id: number;
  date :Date;
};

function BlogList() {
  const [blogs, setBlogs] = useState<Blogs[]>([
    {
      title: "My new Website",
      body: "lorem ipsum dolor sit amet",
      author: "Mo",
      id: 1,
      date: new Date(),
    },
    {
      title: "My second Website",
      body: "lorem ipsum dolor sit amet",
      author: "No",
      id: 2,
      date: new Date(),
    },
    {
      title: "My third Website",
      body: "lorem ipsum dolor sit amet",
      author: "Mo",
      id: 3,
      date: new Date(),
    },
  ]);

  return (
    <div>
      
      <ArtikelCard blogs={blogs} />
    </div>
  );
}

export default BlogList;
