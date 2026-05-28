import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { useForm } from "react-hook-form";
import { apiurl } from "../common/Http";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  
   const onSubmit = async (data) => {
  try {
    const res = await fetch(apiurl + "contact-now", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // check if response is OK
    if (!res.ok) {
      throw new Error("Server error");
    }

    const result = await res.json();

    if (result.status === true) {
      toast.success(result.message);
      reset();
    } else {
      toast.error(result.message || "Something went wrong.");
    }

  } catch (error) {
    console.error(error);
    toast.error("Network error. Please try again.");
  }
};

  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality. Integrity. Value."
          heading="Contact Us"
          text=" we excel at transforming vision into relaity <br/> through outstanding craftmanship and precise."
        />
        <section className="section-9 py-5">
          <div className="container">
            <div className="section-header text-center">
              <h2>Contact Us</h2>
              <p>
                Our dedicated experts are here to help you with any of your
                questions, contact us by filling <br /> out the form below and
                we will be in touch shortly.
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-md-3">
                <div className="card shadow border-0 mb-3">
                  <div className="card-body p-4">
                    <h3>Call Us</h3>
                    <div>
                      
                      <a href=""> (+977-9842406210) </a>
                    </div>
                    <div>
                      
                      <a href=""> (+977-9746685440)</a>
                    </div>

                    <h3 className="mt-4">You can write us</h3>
                    <div>
                      <a href=""> adityakunwar62@gmail.com </a>
                    </div>
                    <div>
                      <a href=""> urbanedgecons@gmail.com</a>
                    </div>

                    <h3 className="mt-4">Address</h3>
                    <div>
                      
                      AlokNagar-31 <br />
                     Kathmandu, Nepal <br /> 44600
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row ">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="name" className="form-label ">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            {...register("name", {
                              required: "The name field is required",
                            })}
                            className={`form-control ${errors.name && "is-invalid"}`}
                            placeholder="Enter Name"
                          />
                          {errors.name && (
                            <p className="invalid-feedback">
                              {errors.name?.message}
                            </p>
                          )}
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="text"
                            id="email"
                            {...register("email", {
                              required: "Thi email field is required",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter a valid email address",
                              },
                            })}
                            className={`form-control ${errors.email && "is-invalid"}`}
                            placeholder="Enter Email"
                          />
                          {errors.email && (
                            <p className="invalid-feedback">
                              {errors.email?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="phone" className="form-label">
                            Phone
                          </label>
                          <input
                            type="text"
                            id="phone"
                            {...register("phone")}
                            className="form-control form-control-lg"
                            placeholder="phone No."
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="subject" className="form-label">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            {...register("subject")}
                            className="form-control form-control-lg"
                            placeholder="subject "
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="form-label">
                          Message
                        </label>
                        <textarea
                          {...register("message")}
                          placeholder="message"
                          rows={5}
                          id="message"
                          className="form-control form-control-lg"
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary large mt-4">
                             Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact
