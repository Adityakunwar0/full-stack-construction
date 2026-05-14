import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import { apiurl, token } from "../../common/Http";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Show = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const res = await fetch(apiurl + "articles", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
    });
    const result = await res.json();
    setArticles(result.data);
    //console.log(result);
  };
  const deleteArticle = async (id) => {
    if (confirm("Are You Sure You Want to Delete ?")) {
      const res = await fetch(apiurl + "articles/" + id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();

      if (result.status == true) {
        const newArticles = articles.filter((article) => article.id != id);
        setArticles(newArticles);
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3 ">
              <Sidebar />
              {/* sidebar */}
            </div>
            <div className="col-md-9">
              {/* Dashboard */}
              <div className="card shadow border-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h4 className="h5">Articles</h4>
                    <Link
                      to="/admin/articles/create"
                      className="btn btn-primary"
                    >
                      Create
                    </Link>
                  </div>
                  <hr />
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Title</th>
                          {/* <th>Slug</th> */}
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {articles &&
                          articles.map((article) => {
                            return (
                              <tr key={`articles-${article.id}`}>
                                <td>{article.id}</td>
                                <td>{article.title}</td>
                                {/* <td>{article.slug}</td> */}
                                <td>
                                  {article.status == 1 ? "Active" : "Block"}
                                </td>
                                <td>
                                  <div className="d-flex flex-column flex-md-row gap-2">
                                    <Link
                                      to={`/admin/articles/edit/${article.id}`}
                                      className="btn btn-primary small "
                                    >
                                      Edit
                                    </Link>
                                    <Link
                                      onClick={() => deleteArticle(article.id)}
                                      href="#"
                                      className="btn btn-secondary small ms-2"
                                    >
                                      Delete
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Show;
