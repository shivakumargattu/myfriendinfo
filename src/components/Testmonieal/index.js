import React, { useState } from 'react';
import "./index.css"
import '@fortawesome/fontawesome-free/css/all.min.css';


const MyComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="gradient-custom">
      <div className="container my-5 py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className="text-center mb-4 pb-2">
              <i className="fas fa-quote-left fa-3x text-white"></i>
            </div>

            <div className="card">
              <div className="card-body px-4 py-5">
                {/* Carousel wrapper */}
                <div id="carouselDarkVariant" className="carousel slide carousel-dark" data-mdb-ride="carousel">
                  {/* Indicators */}
                  <div className="carousel-indicators mb-0">
                    <button
                      data-mdb-target="#carouselDarkVariant"
                      data-mdb-slide-to="0"
                      className={activeSlide === 0 ? 'active' : ''}
                      aria-current="true"
                      aria-label="Slide 1"
                      onClick={() => handleSlideChange(0)}
                    ></button>
                    <button
                      data-mdb-target="#carouselDarkVariant"
                      data-mdb-slide-to="1"
                      className={activeSlide === 1 ? 'active' : ''}
                      aria-label="Slide 2"
                      onClick={() => handleSlideChange(1)}
                    ></button>
                    <button
                      data-mdb-target="#carouselDarkVariant"
                      data-mdb-slide-to="2"
                      className={activeSlide === 2 ? 'active' : ''}
                      aria-label="Slide 3"
                      onClick={() => handleSlideChange(2)}
                    ></button>
                    <button
                      data-mdb-target="#carouselDarkVariant"
                      data-mdb-slide-to="3"
                      className={activeSlide === 3 ? 'active' : ''}
                      aria-label="Slide 4"
                      onClick={() => handleSlideChange(3)}
                    ></button>
                    <button
                      data-mdb-target="#carouselDarkVariant"
                      data-mdb-slide-to="4"
                      className={activeSlide === 4 ? 'active' : ''}
                      aria-label="Slide 3"
                      onClick={() => handleSlideChange(4)}
                    ></button>
                  </div>

                  {/* Inner */}
                  <div className="carousel-inner pb-5">
                    {/* Single item */}
                    <div className={`carousel-item ${activeSlide === 0 ? 'active' : ''}`}>
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                          <div className="row">
                            <div className="col-lg-4 d-flex justify-content-center">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                alt="woman avatar"
                                width="150"
                                height="150"
                              />
                            </div>
                            <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                              <h4 className="mb-4">Maria Smantha - Web Developer</h4>
                              <p className="mb-0 pb-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                aliquam amet animi blanditiis consequatur debitis dicta
                                distinctio, enim error eum iste libero modi nam natus
                                perferendis possimus quasi sint sit tempora voluptatem. Est,
                                exercitationem id ipsa ipsum laboriosam perferendis.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Single item */}
                    <div className={`carousel-item ${activeSlide === 1 ? 'active' : ''}`}>
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                          <div className="row">
                            <div className="col-lg-4 d-flex justify-content-center">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                alt="woman avatar"
                                width="150"
                                height="150"
                              />
                            </div>
                            <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                              <h4 className="mb-4">Lisa Cudrow - Graphic Designer</h4>
                              <p className="mb-0 pb-3">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque
                                ipsa quae ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                quia voluptas sit aspernatur.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Single item */}
                    <div className={`carousel-item ${activeSlide === 4 ? 'active' : ''}`}>
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                          <div className="row">
                            <div className="col-lg-4 d-flex justify-content-center">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                alt="woman avatar"
                                width="150"
                                height="150"
                              />
                            </div>
                            <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                              <h4 className="mb-4">Lisa Cudrow - Graphic Designer</h4>
                              <p className="mb-0 pb-3">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque
                                ipsa quae ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                quia voluptas sit aspernatur.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Single item */}
                    <div className={`carousel-item ${activeSlide === 3 ? 'active' : ''}`}>
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                          <div className="row">
                            <div className="col-lg-4 d-flex justify-content-center">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                alt="woman avatar"
                                width="150"
                                height="150"
                              />
                            </div>
                            <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                              <h4 className="mb-4">Lisa Cudrow - Graphic Designer</h4>
                              <p className="mb-0 pb-3">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque
                                ipsa quae ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                quia voluptas sit aspernatur.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    {/* Single item */}
                    <div className={`carousel-item ${activeSlide === 2 ? 'active' : ''}`}>
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                          <div className="row">
                            <div className="col-lg-4 d-flex justify-content-center">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                alt="woman avatar"
                                width="150"
                                height="150"
                              />
                            </div>
                            <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                              <h4 className="mb-4">John Smith - Marketing Specialist</h4>
                              <p className="mb-0 pb-3">
                                At vero eos et accusamus et iusto odio dignissimos qui
                                blanditiis praesentium voluptatum deleniti atque corrupti quos
                                dolores et quas molestias excepturi sint occaecati cupiditate
                                non provident, similique sunt in culpa qui officia mollitia
                                animi id laborum et dolorum fuga.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Inner */}

                  {/* Controls */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide="prev"
                    disabled={activeSlide === 0}
                    onClick={() => handleSlideChange(activeSlide - 1)}
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide="next"
                    disabled={activeSlide === 4}
                    onClick={() => handleSlideChange(activeSlide + 1)}
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                {/* Carousel wrapper */}
              </div>
            </div>

            <div className="text-center mt-4 pt-2">
              <i className="fas fa-quote-right fa-3x text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
