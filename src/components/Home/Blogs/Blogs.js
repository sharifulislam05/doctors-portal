import React from "react";
import "./_blogs.scss";
import eclipse1 from "../../../assets/images/Ellipse 1.png";
import eclipse2 from "../../../assets/images/Ellipse 2.png";
import eclipse3 from "../../../assets/images/Ellipse 3.png";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogData = [
    {
      title: "Check at least a doctor in a year for your teeth",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
      author: "Dr. Cudi",
      authorImg: eclipse1,
      date: "23 April 2019",
    },
    {
      title: "Two time brush in a day can keep you healthy",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
      author: "Dr. Sinthia",
      authorImg: eclipse2,
      date: "23 April 2019",
    },
    {
      title: "The tooth cancer is taking a challenge",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
      author: "Dr. Cudi",
      authorImg: eclipse3,
      date: "23 April 2019",
    },
  ];
  return (
    <section className="container blogs">
      <div className="blogs__header text-center">
        <h3>OUR BLOGS</h3>
        <p>From Our Blog News</p>
      </div>
      <div className="row mt-5">
        {blogData.map((blog, index) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
