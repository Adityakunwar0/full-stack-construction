import React from "react";

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
                <a href="">Speciality Construction</a>
              </li>
              <li>
                <a href="">Civil Construction</a>
              </li>
              <li>
                <a href="">Residential Construction</a>
              </li>
              <li>
                <a href="">Corporate Construction</a>
              </li>
              <li>
                <a href="">Building Construction</a>
              </li>
              <li>
                <a href="">Industrial Construction</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Quick Links</h3>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Contact Us</h3>
            <ul>
              <li>
                <a href="">(888-000-0000)</a>
              </li>
              <li>
                <a href="">info@example.com</a>
              </li>
              <p>Tikathali, Kathmandu, Nepal</p>
            </ul>
          </div>
          <hr />
          <p className="text-center pt-2">
            {" "}
            Copyright @2026 UrbanEdge Constructions. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
