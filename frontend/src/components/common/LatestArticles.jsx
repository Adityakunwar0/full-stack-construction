import React, { useEffect, useState } from "react";
import { apiurl, fileUrl } from "./Http";
import { Link } from "react-router-dom";

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);

  const fetchLatestArticles = async () => {
    const res = await fetch(apiurl + "get-latest-articles?limit=3", {
      method: "GET",
    });
    const result = await res.json();
   // console.log(result);
    setArticles(result.data);
  };
  useEffect(() => {
    fetchLatestArticles();
  }, []);

  return (
    <section className="section-6 bg-light py-5">
      <div className="container">
        <div className="section-header text-center">
          <span>Blog & News</span>
          <h2>Articles & blog posts</h2>
          <p>
            We offer a diverse array of construction services, spanning
            residential, commercial, and industrial projects.
          </p>
        </div>
        <div className="row pt-3">
          {articles &&
            articles.map((article) => {
              return (
                <div key={article.id} className="col-md-4">
                  <div className="card shadow border-0">
                    <div className="card-img-top">
                      <img
                        src={`${fileUrl}uploads/articles/small/${article.image}`}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="card-body p-4">
                      <div className="mb-3">
                        <Link to={`/blog/${article.id}`} className="title">
                          {article.title}
                        </Link>
                      </div>
                      <Link
                        to={`/blog/${article.id}`}
                        className="btn btn-primary small"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
