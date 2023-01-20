import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";

const getMenu = axios.create({
  baseURL: "https://chibi-chill-backend.onrender.com/api/menu",
});

export const Menu = () => {
  const [dishes, setDishes] = useState([]);

  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        let response = await getMenu.get();
        setDishes(response.data);
        console.log(dishes);
        console.log(isMobile);
      } catch (error) {
        console.log(error);
        
      }
    };
    fetchMenu();
  }, []);

  return (
    <>
      <section
        id="menu"
        className="menu section-bg mh-100"
        // style={{ height: "420vh" }}
      >
        <div className="container" data-aos="fade-up" 
        // style={{  height: 100px }}
        >
          <div className="section-title">
            <h2>Menu</h2>
            <p>Check Our Tasty Menu</p>
          </div>

          {/* <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-starters">Starters</li>
              <li data-filter=".filter-salads">Salads</li>
              <li data-filter=".filter-specialty">Specialty</li>
            </ul>
          </div>
        </div> */}

          <div
            className="row menu-container h-100"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {dishes.map((dish) => (
              <div>
                <div className="col-lg-6 menu-item filter-starters">
                  {/* <img
                    src={dish.img}
                    className="menu-img"
                    alt=""
                  /> */}
                  <div className="menu-content">
                    <a href="#">{dish.name}</a>
                    <span>{dish.price}</span>
                  </div>
                  <div className="menu-ingredients">{dish.content}</div>
                </div>
              </div>
            ))}

            {/* <div className="col-lg-6 menu-item filter-starters">
            <img src="assets/img/menu/lobster-bisque.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Lobster Bisque</a><span>$5.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <img src="assets/img/menu/bread-barrel.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Bread Barrel</a><span>$6.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <img src="assets/img/menu/cake.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Crab Cake</a><span>$7.95</span>
            </div>
            <div className="menu-ingredients">
              A delicate crab cake served on a toasted roll with lettuce and tartar sauce
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <img src="assets/img/menu/caesar.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Caesar Selections</a><span>$8.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <img src="assets/img/menu/tuscan-grilled.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Tuscan Grilled</a><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Grilled chicken with provolone, artichoke hearts, and roasted red pesto
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <img src="assets/img/menu/mozzarella.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Mozzarella Stick</a><span>$4.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <img src="assets/img/menu/greek-salad.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Greek Salad</a><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach, crisp romaine, tomatoes, and Greek olives
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <img src="assets/img/menu/spinach-salad.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Spinach Salad</a><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <img src="assets/img/menu/lobster-roll.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Lobster Roll</a><span>$12.95</span>
            </div>
            <div className="menu-ingredients">
              Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
            </div>
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
