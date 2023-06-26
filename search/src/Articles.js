import React from "react";

const Articles = ({ articles }) => {
  return (
    <div className="blog-main">
      {articles.map((article, index) => (
        <div key={index} className="blog-item">
          <div
            className="img-blog"
            style={{ backgroundImage: `url(${article.img})` }}
          ></div>
          <div className="title">{article.title}</div>
          <div className="content-blog">{article.content}</div>
          <div className="date">{article.date}</div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
