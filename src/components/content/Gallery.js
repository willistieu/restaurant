import React from 'react';

export const Gallery = () => {
    return (
        <>
        <section id="gallery" className="gallery">

<div className="container" data-aos="fade-up">
  <div className="section-title">
    <h2>Gallery</h2>
    <p>Some photos from Our Restaurant</p>
  </div>
</div>

<div className="container-fluid" data-aos="fade-up" data-aos-delay="100">

  <div className="row g-0">

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a className="gallery-lightbox" data-gall="gallery-item">
          <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid" width="600" height="800"/>
        </a>
      </div>
    </div>

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a className="gallery-lightbox" data-gall="gallery-item" width="600" height="800">
          <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
        </a>
      </div>
    </div>

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a className="gallery-lightbox" data-gall="gallery-item">
          <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
        </a>
      </div>
    </div>

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a className="gallery-lightbox" data-gall="gallery-item">
          <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid" />
        </a>
      </div>
    </div>

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a className="gallery-lightbox" data-gall="gallery-item">
          <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
        </a>
      </div>
    </div>

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a className="gallery-lightbox" data-gall="gallery-item">
          <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
        </a>
      </div>
    </div>

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a className="gallery-lightbox" data-gall="gallery-item">
          <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid" />
        </a>
      </div>
    </div>

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a className="gallery-lightbox" data-gall="gallery-item">
          <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid" />
        </a>
      </div>
    </div>

  </div>

</div>
</section>
        </>
    )
}