import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { apiurl, fileUrl } from "../common/Http";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [articles, setArticles] = useState([]);

  const fetchAllArticles = async () => {
    const res = await fetch(apiurl + "get-articles", {
      method: "GET",
    });
    const result = await res.json();
    // console.log(result);
    setArticles(result.data);
  };
  useEffect(() => {
    fetchAllArticles();
  }, []);
  return (
    <>
      <Header />
      <Hero
        preHeading="Quality. Integrity. Value."
        heading="Blogs"
        text=" we excel at transforming vision into relaity <br/> through outstanding craftmanship and precise."
      />
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
                  <div key={article.id} className="col-md-4 mb-3">
                    <div className="card shadow border-0">
                      <div className="card-img-top">
                        <img
                          src={`${fileUrl}uploads/articles/small/${article.iamge}`}
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
      <Footer />
    </>
  );
};

export default Blogs;
