import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
// import ProjectImg from "../../assets/images/construction11.jpg";
// import ProjectImg2 from "../../assets/images/construction122.jpg";
// import ProjectImg3 from "../../assets/images/construction1212.jpg";
// import ProjectImg4 from "../../assets/images/construction12121.jpg";
import { apiurl, fileUrl } from "../common/Http";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const fetchAllProjects = async () => {
    const res = await fetch(apiurl + "get-projects", {
      method: "GET",
    });
    const result = await res.json();
    // console.log(result);
    setProjects(result.data);
  };
  useEffect(() => {
    fetchAllProjects();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality. Integrity. Value."
          heading="Our Projects"
          text=" we excel at transforming vision into relaity <br/> through outstanding craftmanship and precise."
        />
        <section className="section-3 bg-light py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>our projects</span>
              <h2>Discover our diverse range of projects</h2>
              <p>
                We offer a diverse array of construction services, spanning
                residential, commercial, and industrial projects.
              </p>
            </div>
            <div className="row pt-4">
              {projects &&
                projects.map((project) => {
                  return (
                    <div key={project.id} className="col-md-4 col-lg-4">
                      <div className="item">
                        <div className="service-image">
                          <img
                            src={`${fileUrl}uploads/projects/small/${project.image}`}
                            alt=""
                            className="w-100"
                          />
                        </div>
                        <div className="service-body">
                          <div className="service-title">
                            <h3>{project.title}</h3>
                          </div>
                          <div className="service-content">
                            <p>{project.short_desc}</p>
                          </div>
                          <Link
                            to={`/project/${project.id}`}
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
      </main>
      <Footer />
    </>
  );
};

export default Projects;
