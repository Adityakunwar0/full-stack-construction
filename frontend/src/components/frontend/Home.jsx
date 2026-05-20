import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import { Footer } from "../common/Footer";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import AvatarImg from "../../assets/images/author-2.jpg";
import { Pagination } from "swiper/modules";
import About from "../common/About";
import { apiurl, token } from "../common/Http";
import LatestServices from "../common/LatestServices";
import LatestProjects from "../common/LatestProjects";
import LatestArticles from "../common/LatestArticles";
import ShowTestimonial from "../common/ShowTestimonial";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        {/*Hero Section */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Amazing constructions</span>
                <h1>
                  Crafting dreams with <br /> precision and excellence
                </h1>
                <p>
                  we excel at transforming vision into relaity through
                  outstanding craftmanship and precise
                  <br /> attention to detail. with years of experience and a
                  dedicated to quality
                </p>
                <div className="mt-4">
                  <Link to="/contact" className="btn btn-primary large">
                    Contact Now
                  </Link>
                  <Link to="/projects" className="btn btn-secondary large ms-2">
                    View Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About Us Section */}
        <About />

        {/* Our Services */}
        <LatestServices />

        {/* why chhose us */}
        <section className="section-4 py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Why Choose Us</span>
              <h2>Discover our wide variety of projects.</h2>
              <p>
                Created in close partnership with our clients and collaborators,
                this approach merges industry expertise,
                <br /> decades of experience, innovation, and flexibility to
                consistently deliver excellence.
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon1} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <p>
                    Small actions create big impacts. It all begins and ends
                    with each employee committing to safer work practices daily,
                    ensuring they return home safely.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon2} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Superior Craftmanship</h3>
                  </div>
                  <p>
                    Superior craftsmanship is built through skill, dedication,
                    and attention to every detail, ensuring excellence in every
                    project.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon3} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Knowledge and Expertise</h3>
                  </div>
                  <p>
                    Great results come from deep knowledge and hands-on
                    expertise, where experience and dedication to consistently
                    deliver high-quality work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Our Projects */}
        <LatestProjects />

        {/*Testimonial */}
        <ShowTestimonial />

        {/* Blogs and 'Article */}
        <LatestArticles />
      </main>
      <Footer />
    </>
  );
};

export default Home;
