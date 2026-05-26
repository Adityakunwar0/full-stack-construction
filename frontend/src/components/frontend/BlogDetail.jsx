import React, { useEffect, useState } from "react";
import Hero from "../common/Hero";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link, useParams } from "react-router-dom";
import { apiurl, fileUrl } from "../common/Http";

const BlogDetail = () => {
  const params = useParams();
  const [article, setArticle] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);

  const fetchLatestArticles = async () => {
    const res = await fetch(`${apiurl}get-latest-articles`, {
      method: "GET",
    });
    const result = await res.json();
    setLatestArticles(result.data);
    //console.log(result);
  };

  const fetchArticle = async () => {
    const res = await fetch(`${apiurl}get-article/${params.id}`, {
      method: "GET",
    });
    const result = await res.json();
    setArticle(result.data);
    //console.log(result);
  };

  useEffect(() => {
    fetchArticle();
    fetchLatestArticles();
  }, [params.id]);

  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality. Integrity. Value."
          heading="Blog & News"
          text=""
        />
      </main>
      <section className="section-11">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-8">
              <h2>{article.title}</h2>
              <div className="pb-3">
                by <strong>{article.author}</strong> on {article.created_at}
              </div>
              <div className="pe-md-5 pb-3">
                <img
                  className="w-100"
                  src={`${fileUrl}uploads/articles/large/${article.image}`}
                  alt=""
                />
              </div>
              <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0 sidebar">
                <div className="card-body px-5 py-4">
                  <h3 className="mt-2 mb-3">Latest Blogs</h3>
                  {latestArticles &&
                    latestArticles.map((article) => {
                      return (
                        <div
                          key={`blog-${article.id}`}
                          className="d-flex border-bottom mb-3 pb-2"
                        >
                          <div className="pe-3 pb-2">
                            <Link to={`/blog/${article.id}`}>
                              <img
                                width={100}
                                src={`${fileUrl}uploads/articles/small/${article.image}`}
                                alt=""
                              />
                            </Link>
                          </div>
                          <Link to={`/blog/${article.id}`} className="title">
                            {article.title}
                          </Link>
                          <hr />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogDetail;
