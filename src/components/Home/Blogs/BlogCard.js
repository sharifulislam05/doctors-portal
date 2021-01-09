import React from "react";

const BlogCard = ({ blog }) => {
  const { title, description, author, authorImg, date } = blog;
  return (
    <div className="blog__card col-md-4">
      <div className="row mt-3">
        <div className="blog__img col-md-2">
          <img src={authorImg} className="img-fluid float-left" alt="..." />
        </div>
        <div className="blog__author col-md-10">
          <h6 className="font-weight-bold">{author}</h6>
          <p className="text-secondary">{date}</p>
        </div>
      </div>
      <div className="blog__body pr-5">
        <h5 className="font-weight-bold text-justify">{title}</h5>
        <p className="blog__description text-secondary text-justify mt-3">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
