import React, { useEffect, useState } from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import { Link } from "react-router-dom";
import { apiurl, token } from "../../common/Http";
import { toast } from "react-toastify";

const Show = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    const res = await fetch(apiurl + "testimonials", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
    });
    const result = await res.json();
    setTestimonials(result.data);
    //console.log(result);
  };

  const deleteTestimonial = async (id) => {
    if (confirm("Are You Sure You Want to Delete ?")) {
      const res = await fetch(apiurl + "testimonials/" + id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();

      if (result.status == true) {
        const newTestimonials = testimonials.filter(
          (testimonial) => testimonial.id != id,
        );
        setTestimonials(newTestimonials);
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    }

    //setServices(result.data)
  };
  useEffect(() => {
    fetchTestimonials();
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
                    <h4 className="h5">Testimonials</h4>
                    <Link
                      to="/admin/testimonials/create"
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
                          <th>Testimonial</th>
                          <th>Citation</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {testimonials &&
                          testimonials.map((testimonial) => {
                            return (
                              <tr key={`testimonial-${testimonial.id}`}>
                                <td>{testimonial.id}</td>
                                <td>{testimonial.testimonial}</td>
                                <td>{testimonial.citation}</td>
                                <td>
                                  {testimonial.status == 1 ? "Active" : "Block"}
                                </td>
                                <td>
                                  <div className="d-flex flex-column flex-md-row gap-2">
                                    <Link
                                      to={`/admin/testimonials/edit/${testimonial.id}`}
                                      className="btn btn-primary small "
                                    >
                                      Edit
                                    </Link>
                                    <Link
                                      onClick={() =>
                                        deleteTestimonial(testimonial.id)
                                      }
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
