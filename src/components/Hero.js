import React, { useEffect, useState } from "react";
import { Intro } from "./videos/Intro";

export const Hero = () => {
  const [value, setValue] = useState(false);

  if (value == true) {
    return (
      <>
        <section id="hero" className="d-flex align-items-center">
          <div
            className="container position-relative text-center text-lg-start"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="row">
              <div className="col-lg-8">
                <h1>
                  Welcome to <span>Restaurantly</span>
                </h1>
                <h2>Delivering great food for more than 18 years!</h2>

                <div
                  className="btns"
                  onClick={() => {
                    setValue(false);
                    console.log("value: ", value);
                  }}
                >
                  <a
                    href="#menu"
                    className="btn-menu animated fadeInUp scrollto"
                  >
                    Our Menu
                  </a>
                  <a
                    href="#book-a-table"
                    className="btn-book animated fadeInUp scrollto"
                    onClick={() => {
                      setValue(false);
                      console.log("value: ", value);
                    }}
                  >
                    Book a Table
                  </a>
                </div>
              </div>
              {/* <div
                className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
                data-aos="zoom-in"
                data-aos-delay="200"
                onClick={() => {
                  setValue(true);
                  console.log("value: ", value);
                }}
              >
                <a className="glightbox play-btn" />
              </div> */}
              

              
              
            </div>
            <br></br>
            <Intro />
          </div>
          
        </section>
        
      </>
    );
  } else {
    return (
      <>
        <section id="hero" className="d-flex align-items-center">
          <div
            className="container position-relative text-center text-lg-start"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="row">
              <div className="col-lg-8">
                <h1>
                  Welcome to <span>Restaurantly</span>
                </h1>
                <h2>Delivering great food for more than 18 years!</h2>

                <div className="btns">
                  <a
                    href="#menu"
                    className="btn-menu animated fadeInUp scrollto"
                  >
                    Our Menu
                  </a>
                  <a
                    href="#book-a-table"
                    className="btn-book animated fadeInUp scrollto"
                  >
                    Book a Table
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
                data-aos="zoom-in"
                data-aos-delay="200"
                onClick={() => {
                  setValue(true);
                  console.log("value: ", value);
                }}
              >
                <a className="glightbox play-btn" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};
