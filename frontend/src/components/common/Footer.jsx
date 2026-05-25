import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h3 className="mb-4">UrbanEdge Constructions</h3>
            <div className="pe-5">
              <p>
                Our post-construction services gives you peace of mind knowing
                that we are still here for you even after
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Our Services</h3>
            <ul>
              <li>
                <Link to="/service/7">Speciality Construction</Link>
              </li>
              <li>
                <Link to="/service/6">Civil Construction</Link>
              </li>
              <li>
                <Link to="/service/4">Residential Construction</Link>
              </li>
              <li>
                <Link to="/service/5">Corporate Construction</Link>
              </li>
              <li>
                <Link to="/service/8">Commercial Construction</Link>
              </li>
              <li>
                <Link to="/service/3">Industrial Construction</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Quick Links</h3>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Contact Us</h3>
            <ul>
              <li>
                <a href="">(+977-9842406210 )</a>
              </li>
              <li>
                <a href="">adityakunwar6210@gmail.com</a>
              </li>
              <p>AlokNagar-31, Kathmandu 44600, Nepal</p>
            </ul>
          </div>
          <hr />
          <p className="text-center pt-2">
            Copyright @2026 UrbanEdge Constructions. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
