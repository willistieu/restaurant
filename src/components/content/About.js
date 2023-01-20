import React from 'react';
import aboutImg from "./img/about.jpg";

export const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="about-img">
                <img src={aboutImg} alt="img" />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <p>
                Chibi Chill restaurant & bar operating on Majland ship brings
                Asian nightlife and street food to Turku, offering authentic
                Asian flavors and some dishes that are firsts in Finland. <br /> <br />
                Come chill and meet the staff that warmly welcomes you! Order a
                bubble tea and some snacks or a main dish if you’re hungry,
                relax and have fun. We offer table service so you can just enjoy
                your time. <br /> <br /> We also have board games and different events such as
                K-parties and Beer Pong nights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
