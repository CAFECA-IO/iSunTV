import Image from "next/image";

export default function Home() {
  const jsx = (
    <main>
      <meta charSet="utf-8" />
      <meta name="keywords" content="iSunTV - Shed light on every shadowy facet of the world." />
      <meta
        name="description"
        content="iSunTV - Shed light on every shadowy facet of the world."
      />
      <meta name="author" content="StreamLab" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>iSunTV - Shed light on every shadowy facet of the world.</title>
      {/* Favicon */}
      <link rel="shortcut icon" href="images/favicon.png" />
      {/* CSS bootstrap*/}
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      {/*  Style */}
      <link rel="stylesheet" href="css/style.css" />
      {/*  Responsive */}
      <link rel="stylesheet" href="css/responsive.css" />
      {/*=========== Loader =============*/}
      <div id="gen-loading">
        <div id="gen-loading-center">
          <img src="images/logo-1.png" alt="loading" />
        </div>
      </div>
      {/*=========== Loader =============*/}
      {/*========== Header ==============*/}
      <header id="gen-header" className="gen-header-style-1 gen-has-sticky">
        <div className="gen-bottom-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="navbar-brand" href="#">
                    <img
                      className="img-fluid logo"
                      src="images/logo-1.png"
                      alt="streamlab-image"
                    />
                  </a>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <div id="gen-menu-contain" className="gen-menu-contain">
                      <ul id="gen-main-menu" className="navbar-nav ml-auto">
                        <li className="menu-item active">
                          <a href="#" aria-current="page">
                            Home
                          </a>
                          <i className="fa fa-chevron-down gen-submenu-icon" />
                          <ul className="sub-menu">
                            <li className="menu-item active">
                              <a href="index.html" aria-current="page">
                                Main Home
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="movies-home.html" aria-current="page">
                                Movies Home
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="tv-shows-home.html" aria-current="page">
                                Tv Shows Home
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="video-home.html" aria-current="page">
                                Video Home
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="#">Movies</a>
                          <i className="fa fa-chevron-down gen-submenu-icon" />
                          <ul className="sub-menu">
                            <li className="menu-item menu-item-has-children">
                              <a href="#">Movies List</a>
                              <i className="fa fa-chevron-down gen-submenu-icon" />
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <a href="movies-load-more.html">Load More</a>
                                </li>
                                <li className="menu-item">
                                  <a href="movies-infinite-scroll.html">
                                    Infinite scroll
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a href="movies-pagination.html">Pagination</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                              <a href="#">Movies Style</a>
                              <i className="fa fa-chevron-down gen-submenu-icon" />
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <a href="movies-style-1.html">Style 1</a>
                                </li>
                                <li className="menu-item">
                                  <a href="movies-style-2.html">Style 2</a>
                                </li>
                                <li className="menu-item">
                                  <a href="movies-style-3.html">Style 3</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item">
                              <a href="single-movie.html">Single Movie</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="#">Tv Shows</a>
                          <i className="fa fa-chevron-down gen-submenu-icon" />
                          <ul className="sub-menu">
                            <li className="menu-item menu-item-has-children">
                              <a href="#">Tv Shows List</a>
                              <i className="fa fa-chevron-down gen-submenu-icon" />
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <a href="tv-shows-load-more.html">Load More</a>
                                </li>
                                <li className="menu-item">
                                  <a href="tv-shows-infinite-scroll.html">
                                    Infinite scroll
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a href="tv-shows-pagination.html">Pagination</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                              <a href="#">Tv Shows Style</a>
                              <i className="fa fa-chevron-down gen-submenu-icon" />
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <a href="tv-shows-style-1.html">Style 1</a>
                                </li>
                                <li className="menu-item">
                                  <a href="tv-shows-style-2.html">Style 2</a>
                                </li>
                                <li className="menu-item">
                                  <a href="tv-shows-style-3.html">Style 3</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item">
                              <a href="single-tv-shows.html">Single Tv Shows</a>
                            </li>
                            <li className="menu-item">
                              <a href="single-episode.html">Single Episode</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="#">Video</a>
                          <i className="fa fa-chevron-down gen-submenu-icon" />
                          <ul className="sub-menu">
                            <li className="menu-item menu-item-has-children">
                              <a href="#">Video</a>
                              <i className="fa fa-chevron-down gen-submenu-icon" />
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <a href="video-load-more.html">Load More</a>
                                </li>
                                <li className="menu-item">
                                  <a href="video-infinite-scroll.html">
                                    Infinite scroll
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a href="video-pagination.html">Pagination</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                              <a href="#">Videos Style</a>
                              <i className="fa fa-chevron-down gen-submenu-icon" />
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <a href="videos-style-1.html">Style 1</a>
                                </li>
                                <li className="menu-item">
                                  <a href="videos-style-2.html">Style 2</a>
                                </li>
                                <li className="menu-item">
                                  <a href="videos-style-3.html">Style 3</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item">
                              <a href="single-videos.html">Single videos</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="#">Pages</a>
                          <i className="fa fa-chevron-down gen-submenu-icon" />
                          <ul className="sub-menu">
                            <li className="menu-item menu-item-has-children">
                              <a href="#">Blog</a>
                              <i className="fa fa-chevron-down gen-submenu-icon" />
                              <ul className="sub-menu">
                                <li className="menu-item menu-item-has-children">
                                  <a href="#">Blog With Sidebar</a>
                                  <i className="fa fa-chevron-down gen-submenu-icon" />
                                  <ul className="sub-menu">
                                    <li className="menu-item">
                                      <a href="blog-left-sidebar.html">
                                        blog left sidebar
                                      </a>
                                    </li>
                                    <li className="menu-item">
                                      <a href="blog-right-sidebar.html">
                                        blog right sidebar
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                              <a href="#">Pricing</a>
                              <i className="fa fa-chevron-down gen-submenu-icon" />
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <a href="pricing-style-1.html">Style 1</a>
                                </li>
                                <li className="menu-item">
                                  <a href="pricing-style-2.html">Style 2</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item">
                              <a href="contact-us.html">Contact Us</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="gen-header-info-box">
                    <div className="gen-menu-search-block">
                      <a href="#" id="gen-seacrh-btn">
                        <i className="fa fa-search" />
                      </a>
                      <div className="gen-search-form">
                        <form
                          role="search"
                          method="get"
                          className="search-form"
                          action="#"
                        >
                          <label>
                            <span className="screen-reader-text" />
                            <input
                              type="search"
                              className="search-field"
                              placeholder="Search …"
                              defaultValue=""
                              name="s"
                            />
                          </label>
                          <button type="submit" className="search-submit">
                            <span className="screen-reader-text" />
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="gen-account-holder">
                      <a href="#" id="gen-user-btn">
                        <i className="fa fa-user" />
                      </a>
                      <div className="gen-account-menu">
                        <ul className="gen-account-menu">
                          {/* Pms Menu */}
                          <li>
                            <a href="log-in.html">
                              <i className="fas fa-sign-in-alt" />
                              login{" "}
                            </a>
                          </li>
                          <li>
                            <a href="register.html">
                              <i className="fa fa-user" />
                              Register{" "}
                            </a>
                          </li>
                          {/* Library Menu */}
                          <li>
                            <a href="library.html">
                              <i className="fa fa-indent" />
                              Library{" "}
                            </a>
                          </li>
                          <li>
                            <a href="library.html">
                              <i className="fa fa-list" />
                              Movie Playlist{" "}
                            </a>
                          </li>
                          <li>
                            <a href="library.html">
                              <i className="fa fa-list" />
                              Tv Show Playlist{" "}
                            </a>
                          </li>
                          <li>
                            <a href="library.html">
                              <i className="fa fa-list" />
                              Video Playlist{" "}
                            </a>
                          </li>
                          <li>
                            <a href="upload-video.html">
                              {" "}
                              <i className="fa fa-upload" />
                              Upload Video{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="gen-btn-container">
                      <a href="register.html" className="gen-button">
                        <div className="gen-button-block">
                          <span className="gen-button-line-left" />
                          <span className="gen-button-text">Subscribe</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fas fa-bars" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*========== Header ==============*/}
      {/* owl-carousel Banner Start */}
      <section className="pt-0 pb-0">
        <div className="container-fluid px-0">
          <div className="row no-gutters">
            <div className="col-12">
              <div className="gen-banner-movies banner-style-2">
                <div
                  className="owl-carousel owl-loaded owl-drag"
                  data-dots="false"
                  data-nav="true"
                  data-desk_num={1}
                  data-lap_num={1}
                  data-tab_num={1}
                  data-mob_num={1}
                  data-mob_sm={1}
                  data-autoplay="true"
                  data-loop="true"
                  data-margin={0}
                >
                  <div
                    className="item"
                    style={{ background: 'url("images/background/asset-1.jpeg")' }}
                  >
                    <div className="gen-movie-contain-style-2 h-100">
                      <div className="container h-100">
                        <div className="row flex-row-reverse align-items-center h-100">
                          <div className="col-xl-6">
                            <div className="gen-front-image">
                              <img
                                src="images/background/asset-1.jpeg"
                                alt="owl-carousel-banner-image"
                              />
                              <a
                                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                className="playBut popup-youtube popup-vimeo popup-gmaps"
                              >
                                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In  */}
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="213.7px"
                                  height="213.7px"
                                  viewBox="0 0 213.7 213.7"
                                  enableBackground="new 0 0 213.7 213.7"
                                  xmlSpace="preserve"
                                >
                                  <polygon
                                    className="triangle"
                                    id="XMLID_17_"
                                    fill="none"
                                    strokeWidth={7}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={10}
                                    points="
                                                          73.5,62.5 148.5,105.8 73.5,149.1 "
                                  />
                                  <circle
                                    className="circle"
                                    id="XMLID_18_"
                                    fill="none"
                                    strokeWidth={7}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={10}
                                    cx="106.8"
                                    cy="106.8"
                                    r="103.3"
                                  ></circle>
                                </svg>
                                <span>Watch Trailer</span>
                              </a>
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="gen-tag-line">
                              <span>Most Viewed</span>
                            </div>
                            <div className="gen-movie-info">
                              <h3>King of Skull</h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul className="gen-meta-after-title">
                                <li className="gen-sen-rating">
                                  <span>12A</span>
                                </li>
                                <li>
                                  {" "}
                                  <img
                                    src="images/asset-2.png"
                                    alt="rating-image"
                                  />
                                  <span>0 </span>
                                </li>
                              </ul>
                              <p>
                                Streamlab is a long established fact that a reader
                                will be distracted by the readable content of a page
                                The point of using Lorem Streamlab.
                              </p>
                              <div className="gen-meta-info">
                                <ul className="gen-meta-after-excerpt">
                                  <li>
                                    <strong>Cast :</strong>
                                    Anna Romanson,Robert Romanson
                                  </li>
                                  <li>
                                    <strong>Genre :</strong>
                                    <span>
                                      <a href="action.html">Action, </a>
                                    </span>
                                    <span>
                                      <a href="animation.html">Annimation, </a>
                                    </span>
                                    <span>
                                      <a href="#">Family </a>
                                    </span>
                                  </li>
                                  <li>
                                    <strong>Tag :</strong>
                                    <span>
                                      <a href="#">4K Ultra, </a>
                                    </span>
                                    <span>
                                      <a href="#">Brother, </a>
                                    </span>
                                    <span>
                                      <a href="#">Dubbing, </a>
                                    </span>
                                    <span>
                                      <a href="#">Premieres </a>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <div className="gen-btn-container">
                                <a
                                  href="single-movie.html"
                                  className="gen-button .gen-button-dark"
                                >
                                  <i aria-hidden="true" className="fas fa-play" />{" "}
                                  <span className="text">Play Now</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="item"
                    style={{ background: 'url("images/background/asset-3.jpeg")' }}
                  >
                    <div className="gen-movie-contain-style-2 h-100">
                      <div className="container h-100">
                        <div className="row flex-row-reverse align-items-center h-100">
                          <div className="col-xl-6">
                            <div className="gen-front-image ">
                              <img
                                src="images/background/asset-3.jpeg"
                                alt="owl-carousel-banner-image"
                              />
                              <a
                                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                className="playBut popup-youtube popup-vimeo popup-gmaps"
                              >
                                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In  */}
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="213.7px"
                                  height="213.7px"
                                  viewBox="0 0 213.7 213.7"
                                  enableBackground="new 0 0 213.7 213.7"
                                  xmlSpace="preserve"
                                >
                                  <polygon
                                    className="triangle"
                                    id="XMLID_19_"
                                    fill="none"
                                    strokeWidth={7}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={10}
                                    points="
                                                          73.5,62.5 148.5,105.8 73.5,149.1 "
                                  />
                                  <circle
                                    className="circle"
                                    id="XMLID_20_"
                                    fill="none"
                                    strokeWidth={7}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={10}
                                    cx="106.8"
                                    cy="106.8"
                                    r="103.3"
                                  ></circle>
                                </svg>
                                <span>Watch Trailer</span>
                              </a>
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="gen-tag-line">
                              <span>Best Of 2021</span>
                            </div>
                            <div className="gen-movie-info">
                              <h3>The Express</h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul className="gen-meta-after-title">
                                <li className="gen-sen-rating">
                                  <span>PG-14</span>
                                </li>
                                <li>
                                  {" "}
                                  <img
                                    src="images/asset-2.png"
                                    alt="rating-image"
                                  />
                                  <span>8.5 </span>
                                </li>
                              </ul>
                              <p>
                                Streamlab is a long established fact that a reader
                                will be distracted by the readable content of a page
                                when Streamlab at its layout Streamlab.
                              </p>
                              <div className="gen-meta-info">
                                <ul className="gen-meta-after-excerpt">
                                  <li>
                                    <strong>Cast :</strong>
                                    Robert Romanson,Anne Good
                                  </li>
                                  <li>
                                    <strong>Genre :</strong>
                                    <span>
                                      <a href="action.html">Action, </a>
                                    </span>
                                    <span>
                                      <a href="adventure.html">Adventure, </a>
                                    </span>
                                    <span>
                                      <a href="biography.html">Biography </a>
                                    </span>
                                  </li>
                                  <li>
                                    <strong>Tag :</strong>
                                    <span>
                                      <a href="#">4K Ultra, </a>
                                    </span>
                                    <span>
                                      <a href="#">King, </a>
                                    </span>
                                    <span>
                                      <a href="#">Premieres, </a>
                                    </span>
                                    <span>
                                      <a href="#">viking </a>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <div className="gen-btn-container">
                                <a
                                  href="single-movie.html"
                                  className="gen-button gen-button-dark"
                                >
                                  <i aria-hidden="true" className="fas fa-play" />{" "}
                                  <span className="text">Play Now</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="item"
                    style={{ background: 'url("images/background/asset-4.jpeg")' }}
                  >
                    <div className="gen-movie-contain-style-2 h-100">
                      <div className="container h-100">
                        <div className="row flex-row-reverse align-items-center h-100">
                          <div className="col-xl-6">
                            <div className="gen-front-image ">
                              <img
                                src="images/background/asset-4.jpeg"
                                alt="owl-carousel-banner-image"
                              />
                              <a
                                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                className="playBut popup-youtube popup-vimeo popup-gmaps"
                              >
                                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In  */}
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="213.7px"
                                  height="213.7px"
                                  viewBox="0 0 213.7 213.7"
                                  enableBackground="new 0 0 213.7 213.7"
                                  xmlSpace="preserve"
                                >
                                  <polygon
                                    className="triangle"
                                    id="XMLID_21_"
                                    fill="none"
                                    strokeWidth={7}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={10}
                                    points="
                                                          73.5,62.5 148.5,105.8 73.5,149.1 "
                                  />
                                  <circle
                                    className="circle"
                                    id="XMLID_22_"
                                    fill="none"
                                    strokeWidth={7}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={10}
                                    cx="106.8"
                                    cy="106.8"
                                    r="103.3"
                                  ></circle>
                                </svg>
                                <span>Watch Trailer</span>
                              </a>
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="gen-tag-line">
                              <span>High Rated</span>
                            </div>
                            <div className="gen-movie-info">
                              <h3>thieve the bank</h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul className="gen-meta-after-title">
                                <li className="gen-sen-rating">
                                  <span>TV-MA</span>
                                </li>
                                <li>
                                  {" "}
                                  <img
                                    src="images/asset-2.png"
                                    alt="rating-image"
                                  />
                                  <span>9.5 </span>
                                </li>
                              </ul>
                              <p>
                                Streamlab is a long established fact that a reader
                                will be distracted by the readable content of a page
                                when Streamlab at its layout Streamlab.
                              </p>
                              <div className="gen-meta-info">
                                <ul className="gen-meta-after-excerpt">
                                  <li>
                                    <strong>Cast :</strong>
                                    Jennifer Lonez,Mars Shelley
                                  </li>
                                  <li>
                                    <strong>Genre :</strong>
                                    <span>
                                      <a href="action.html">Action, </a>
                                    </span>
                                    <span>
                                      <a href="action.html">Mystery </a>
                                    </span>
                                  </li>
                                  <li>
                                    <strong>Tag :</strong>
                                    <span>
                                      <a href="#">Brother, </a>
                                    </span>
                                    <span>
                                      <a href="#">Hero, </a>
                                    </span>
                                    <span>
                                      <a href="#">Premieres, </a>
                                    </span>
                                    <span>
                                      <a href="#">viking </a>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <div className="gen-btn-container">
                                <a
                                  href="single-movie.html"
                                  className="gen-button gen-button-dark"
                                >
                                  <i aria-hidden="true" className="fas fa-play" />{" "}
                                  <span className="text">Play Now</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* owl-carousel Banner End */}
      {/* owl-carousel Videos Section-1 Start */}
      <section className="gen-section-padding-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h4 className="gen-heading-title">All Time Hits</h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
              <div className="gen-movie-action">
                <div className="gen-btn-container text-right">
                  <a
                    href="tv-shows-pagination.html"
                    className="gen-button gen-button-flat"
                  >
                    <span className="text">More Videos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div className="gen-style-2">
                <div
                  className="owl-carousel owl-loaded owl-drag"
                  data-dots="false"
                  data-nav="true"
                  data-desk_num={4}
                  data-lap_num={3}
                  data-tab_num={2}
                  data-mob_num={1}
                  data-mob_sm={1}
                  data-autoplay="false"
                  data-loop="false"
                  data-margin={30}
                >
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-5.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">The warrior life</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>2hr 00mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-6.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">machine war</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1h 22mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-7.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">the horse lady</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 24 mins</li>
                                <li>
                                  <a href="drama.html">
                                    <span>Drama</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-8.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">Ship of full moon</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 35mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-9.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">Rebuneka the doll</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 44 mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-4.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">thieve the bank</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>30min</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-8.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">Ship of full moon</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 35mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-11.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">the giant ship</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1h 02 mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-12.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">common man’s idea</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 51 mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-13.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">the jin’s friend</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 42 mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* owl-carousel Videos Section-1 End */}
      {/* owl-carousel Videos Section-2 Start */}
      <section className="pt-0 gen-section-padding-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h4 className="gen-heading-title">Top Regional Shows</h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
              <div className="gen-movie-action">
                <div className="gen-btn-container text-right">
                  <a
                    href="tv-shows-pagination.html"
                    className="gen-button gen-button-flat"
                  >
                    <span className="text">More Videos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div className="gen-style-2">
                <div
                  className="owl-carousel owl-loaded owl-drag"
                  data-dots="false"
                  data-nav="true"
                  data-desk_num={4}
                  data-lap_num={3}
                  data-tab_num={2}
                  data-mob_num={1}
                  data-mob_sm={1}
                  data-autoplay="false"
                  data-loop="false"
                  data-margin={30}
                >
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-14.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">ghost of sky</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1 Season</li>
                                <li>
                                  <a href="adventure.html">
                                    <span>Adventure</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-15.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">love in 21st</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>2 Seasons</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-drama movie_tag-4k-ultra movie_tag-brother movie_tag-king movie_tag-premieres">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-16.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">family love</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>0 Seasons</li>
                                <li>
                                  <a href="drama.html">
                                    <span>Drama</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-comedy movie_tag-4k-ultra movie_tag-brother movie_tag-premieres movie_tag-viking">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-17.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">dance nation dance</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>0 Seasons</li>
                                <li>
                                  <a href="comedy.html">
                                    <span>Comedy</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_tag-brother movie_tag-king movie_tag-premieres movie_tag-viking">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-18.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">vacation life</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1 Season</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-mystery movie_tag-brother movie_tag-hero movie_tag-premieres movie_tag-viking">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-19.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">dream of dragons</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1 Season</li>
                                <li>
                                  <a href="drama.html">
                                    <span>Drama</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-romance movie_tag-4k-ultra movie_tag-king movie_tag-premieres movie_tag-viking">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-20.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">command in your hand</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1 Season</li>
                                <li>
                                  <a href="comedy.html">
                                    <span>Comedy</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-documentary movie_tag-4k-ultra movie_tag-brother movie_tag-king movie_tag-premieres">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-21.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">stories of the dark</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1 Season</li>
                                <li>
                                  <a href="biography.html">
                                    <span>Biography</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-sci-fi movie_tag-brother movie_tag-king movie_tag-premieres movie_tag-viking">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-22.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">3 Hackers:TBG</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1 Season</li>
                                <li>
                                  <a href="drama.html">
                                    <span>Drama</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-sport movie_tag-4k-ultra movie_tag-brother movie_tag-premieres movie_tag-viking">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-13.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">friend of jin</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1 Season</li>
                                <li>
                                  <a href="drama.html">
                                    <span>Drama</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* owl-carousel Videos Section-2 End */}
      {/* Slick Slider start */}
      <section className="gen-section-padding-2 pt-0 pb-0">
        <div className="container">
          <div className="home-singal-silder">
            <div className="gen-nav-movies gen-banner-movies">
              <div className="row">
                <div className="col-lg-12">
                  <div className="slider slider-for">
                    {/* Slider Items */}
                    <div
                      className="slider-item"
                      style={{
                        background: 'url("images/background/asset-4.jpeg")'
                      }}
                    >
                      <div className="gen-slick-slider h-100">
                        <div className="gen-movie-contain h-100">
                          <div className="container h-100">
                            <div className="row align-items-center h-100">
                              <div className="col-lg-6">
                                <div className="gen-movie-info">
                                  <h3>thieve the bank</h3>
                                  <p>
                                    Streamlab is a long established fact that a
                                    reader will be distracted by the readable
                                    content of a page when Streamlab at its layout
                                    Streamlab.
                                  </p>
                                </div>
                                <div className="gen-movie-action">
                                  <div className="gen-btn-container button-1">
                                    <a className="gen-button" href="#" tabIndex={0}>
                                      <i
                                        aria-hidden="true"
                                        className="ion ion-play"
                                      />
                                      <span className="text">Play Now</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slider-item"
                      style={{
                        background: 'url("images/background/asset-23.jpeg")'
                      }}
                    >
                      <div className="gen-slick-slider h-100">
                        <div className="gen-movie-contain h-100">
                          <div className="container h-100">
                            <div className="row align-items-center h-100">
                              <div className="col-lg-6">
                                <div className="gen-movie-info">
                                  <h3>Love your life</h3>
                                  <p>
                                    Streamlab is a long established fact that a
                                    reader will be distracted by the readable
                                    content of a page when Streamlab at its layout
                                    Streamlab.
                                  </p>
                                </div>
                                <div className="gen-movie-action">
                                  <div className="gen-btn-container button-1">
                                    <a className="gen-button" href="#" tabIndex={0}>
                                      <i
                                        aria-hidden="true"
                                        className="ion ion-play"
                                      />
                                      <span className="text">Play Now</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slider-item"
                      style={{
                        background: 'url("images/background/asset-24.jpeg")'
                      }}
                    >
                      <div className="gen-slick-slider h-100">
                        <div className="gen-movie-contain h-100">
                          <div className="container h-100">
                            <div className="row align-items-center h-100">
                              <div className="col-lg-6">
                                <div className="gen-movie-info">
                                  <h3>The Last Witness</h3>
                                  <p>
                                    Streamlab is a long established fact that a
                                    reader will be distracted by the readable
                                    content of a page when Streamlab at its layout
                                    Streamlab.
                                  </p>
                                </div>
                                <div className="gen-movie-action">
                                  <div className="gen-btn-container button-1">
                                    <a className="gen-button" href="#" tabIndex={0}>
                                      <i
                                        aria-hidden="true"
                                        className="ion ion-play"
                                      />
                                      <span className="text">Play Now</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slider-item"
                      style={{
                        background: 'url("images/background/asset-25.jpeg")'
                      }}
                    >
                      <div className="gen-slick-slider h-100">
                        <div className="gen-movie-contain h-100">
                          <div className="container h-100">
                            <div className="row align-items-center h-100">
                              <div className="col-lg-6">
                                <div className="gen-movie-info">
                                  <h3>Fight For Life</h3>
                                  <p>
                                    Streamlab is a long established fact that a
                                    reader will be distracted by the readable
                                    content of a page when Streamlab at its layout
                                    Streamlab.
                                  </p>
                                </div>
                                <div className="gen-movie-action">
                                  <div className="gen-btn-container button-1">
                                    <a className="gen-button" href="#" tabIndex={0}>
                                      <i
                                        aria-hidden="true"
                                        className="ion ion-play"
                                      />
                                      <span className="text">Play Now</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Slider Items */}
                  </div>
                  <div className="slider slider-nav">
                    <div className="slider-nav-contain">
                      <div className="gen-nav-img">
                        <img
                          src="images/background/asset-4.jpeg"
                          alt="steamlab-image"
                        />
                      </div>
                      <div className="movie-info">
                        <h3>thieve the bank</h3>
                        <div className="gen-movie-meta-holder">
                          <ul>
                            <li>30mins</li>
                            <li>
                              <a href="action.html">Action </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="slider-nav-contain">
                      <div className="gen-nav-img">
                        <img
                          src="images/background/asset-23.jpeg"
                          alt="streamlab-image"
                        />
                      </div>
                      <div className="movie-info">
                        <h3>Love your life</h3>
                        <div className="gen-movie-meta-holder">
                          <ul>
                            <li>1hr 46mins</li>
                            <li>
                              <a href="action.html">Action </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="slider-nav-contain">
                      <div className="gen-nav-img">
                        <img
                          src="images/background/asset-24.jpeg"
                          alt="streamlab-image"
                        />
                      </div>
                      <div className="movie-info">
                        <h3>The Last Witness</h3>
                        <div className="gen-movie-meta-holder">
                          <ul>
                            <li>1hr 37 mins</li>
                            <li>
                              <a href="action.html">Action </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="slider-nav-contain">
                      <div className="gen-nav-img">
                        <img
                          src="images/background/asset-25.jpeg"
                          alt="streamlab-image"
                        />
                      </div>
                      <div className="movie-info">
                        <h3>Fight For Life</h3>
                        <div className="gen-movie-meta-holder">
                          <ul>
                            <li>2hr 25 mins</li>
                            <li>
                              <a href="action.html">Action </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Slick Slider End */}
      {/* owl-carousel Videos Section-3 Start */}
      <section className="gen-section-padding-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h4 className="gen-heading-title">Watch For Free: Movie Mania</h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
              <div className="gen-movie-action">
                <div className="gen-btn-container text-right">
                  <a
                    href="tv-shows-pagination.html"
                    className="gen-button gen-button-flat"
                  >
                    <span className="text">More Videos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div className="gen-style-2">
                <div
                  className="owl-carousel owl-loaded owl-drag"
                  data-dots="false"
                  data-nav="true"
                  data-desk_num={4}
                  data-lap_num={3}
                  data-tab_num={2}
                  data-mob_num={1}
                  data-mob_sm={1}
                  data-autoplay="false"
                  data-loop="false"
                  data-margin={30}
                >
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-1.jpeg"
                              alt="owl-carousel-video-images"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">King of Skull</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>2hr 13mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-26.jpeg"
                              alt="owl-carousel-video-images"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">Spaceman The Voyager</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1h 32mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-drama movie_tag-4k-ultra movie_tag-brother movie_tag-king movie_tag-premieres">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-27.jpeg"
                              alt="owl-carousel-video-images"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">I Can Only Imagine</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 50mins</li>
                                <li>
                                  <a href="drama.html">
                                    <span>Drama</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-comedy movie_tag-4k-ultra movie_tag-brother movie_tag-premieres movie_tag-viking">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-3.jpeg"
                              alt="owl-carousel-video-images"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">The Express</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>2hr 00mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_tag-brother movie_tag-king movie_tag-premieres movie_tag-viking">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-28.jpeg"
                              alt="owl-carousel-video-images"
                            />
                            <div className="gen-movie-add">
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a className="dropdown-toggle" href="#">
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu">
                                  <a className="login-link" href="register.html">
                                    Sign in to add this movie to a playlist.
                                  </a>
                                </div>
                              </div>
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    aria-label="Like Button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  ></button>
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">Chapter &amp; Verse</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 37 mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* owl-carousel Videos Section-3 End */}
      {/* owl-carousel images Start */}
      <section className="pt-0 gen-section-padding-2 home-singal-silder">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="gen-banner-movies">
                <div
                  className="owl-carousel owl-loaded owl-drag"
                  data-dots="true"
                  data-nav="false"
                  data-desk_num={1}
                  data-lap_num={1}
                  data-tab_num={1}
                  data-mob_num={1}
                  data-mob_sm={1}
                  data-autoplay="true"
                  data-loop="true"
                  data-margin={30}
                >
                  <div
                    className="item"
                    style={{ background: 'url("images/background/asset-20.jpeg")' }}
                  >
                    <div className="gen-movie-contain h-100">
                      <div className="container h-100">
                        <div className="row align-items-center h-100">
                          <div className="col-xl-6">
                            <div className="gen-movie-info">
                              <h3>Command in your hand</h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1 Season</li>
                                <li>3 Episode</li>
                                <li>2013</li>
                                <li>
                                  <a href="#">
                                    <span>Comedy</span>
                                  </a>
                                </li>
                              </ul>
                              <p>
                                Streamlab is a long established fact that a reader
                                will be distracted by the readable content of a page
                                when Streamlab at its layout Streamlab.
                              </p>
                            </div>
                            <div className="gen-movie-action">
                              <div className="gen-btn-container">
                                <a
                                  href="single-episode.html"
                                  className="gen-button gen-button-dark"
                                >
                                  <span className="text">Play now</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="item"
                    style={{ background: 'url("images/background/asset-21.jpeg")' }}
                  >
                    <div className="gen-movie-contain h-100">
                      <div className="container  h-100">
                        <div className="row align-items-center h-100">
                          <div className="col-xl-6">
                            <div className="gen-movie-info">
                              <h3>stories of the dark</h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1 Season</li>
                                <li>5 Episode</li>
                                <li>2015 to 2016</li>
                                <li>
                                  <a href="#">
                                    <span>Biography</span>
                                  </a>
                                </li>
                              </ul>
                              <p>
                                Streamlab is a long established fact that a reader
                                will be distracted by the readable content of a page
                                when Streamlab at its layout Streamlab.
                              </p>
                            </div>
                            <div className="gen-movie-action">
                              <div className="gen-btn-container button-1">
                                <a
                                  href="single-episode.html"
                                  className="gen-button gen-button-dark"
                                >
                                  <span className="text">Play now</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="item"
                    style={{ background: 'url("images/background/asset-37.jpeg")' }}
                  >
                    <div className="gen-movie-contain h-100">
                      <div className="container  h-100">
                        <div className="row align-items-center h-100">
                          <div className="col-xl-6">
                            <div className="gen-movie-info">
                              <h3>Against Beast</h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1 Season</li>
                                <li>1 Episode</li>
                                <li>2017 to 2018</li>
                                <li>
                                  <a href="#">
                                    <span>Drama</span>
                                  </a>
                                </li>
                              </ul>
                              <p>
                                Streamlab is a long established fact that a reader
                                will be distracted by the readable content of a page
                                when Streamlab at its layout Streamlab.
                              </p>
                            </div>
                            <div className="gen-movie-action">
                              <div className="gen-btn-container button-1">
                                <a
                                  href="single-episode.html"
                                  className="gen-button gen-button-dark"
                                >
                                  <span className="text">Play now</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* owl-carousel images End */}
      {/* owl-carousel Videos Section-4 Start */}
      <section className="pt-0 gen-section-padding-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h4 className="gen-heading-title">All Time Hits</h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
              <div className="gen-movie-action">
                <div className="gen-btn-container text-right">
                  <a
                    href="tv-shows-pagination.html"
                    className="gen-button gen-button-flat"
                  >
                    <span className="text">More Videos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div className="gen-style-2">
                <div
                  className="owl-carousel owl-loaded owl-drag"
                  data-dots="false"
                  data-nav="true"
                  data-desk_num={4}
                  data-lap_num={3}
                  data-tab_num={2}
                  data-mob_num={1}
                  data-mob_sm={1}
                  data-autoplay="false"
                  data-loop="false"
                  data-margin={30}
                >
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-10.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">skull of myths</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 24mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-12.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">common idea</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 51mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-drama movie_tag-4k-ultra movie_tag-brother movie_tag-king movie_tag-premieres">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-29.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">shimu the elephant</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 54mins</li>
                                <li>
                                  <a href="drama.html">
                                    <span>Drama</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-comedy movie_tag-4k-ultra movie_tag-brother movie_tag-premieres movie_tag-viking">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-30.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">war of rejonse</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>2hr 20mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_tag-brother movie_tag-king movie_tag-premieres movie_tag-viking">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-31.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">the big sick</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>2hr 00mins</li>
                                <li>
                                  <a href="horror.html">
                                    <span>Horror</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-mystery movie_tag-brother movie_tag-hero movie_tag-premieres movie_tag-viking">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-24.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">the last witness</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 37mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-romance movie_tag-4k-ultra movie_tag-king movie_tag-premieres movie_tag-viking">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-32.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">love, simon</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 50mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-romance movie_tag-4k-ultra movie_tag-king movie_tag-premieres movie_tag-viking">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-33.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">black water</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1h 44mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-sci-fi movie_tag-brother movie_tag-king movie_tag-premieres movie_tag-viking">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-34.jpeg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="facebook">
                                        <i className="fab fa-twitter" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus" />
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">bad genius</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>2hr 10mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* #post-## */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* owl-carousel Videos Section-4 End */}
      {/* footer start */}
      <footer id="gen-footer">
        <div className="gen-footer-style-1">
          <div className="gen-footer-top">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="widget">
                    <div className="row">
                      <div className="col-sm-12">
                        <img
                          src="images/logo-1.png"
                          className="gen-footer-logo"
                          alt="gen-footer-logo"
                        />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        <ul className="social-link">
                          <li>
                            <a href="#" className="facebook">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="facebook">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="facebook">
                              <i className="fab fa-skype" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="facebook">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="widget">
                    <h4 className="footer-title">Explore</h4>
                    <div className="menu-explore-container">
                      <ul className="menu">
                        <li className="menu-item">
                          <a href="index.html" aria-current="page">
                            Home
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="movies-pagination.html">Movies</a>
                        </li>
                        <li className="menu-item">
                          <a href="tv-shows-pagination.html">Tv Shows</a>
                        </li>
                        <li className="menu-item">
                          <a href="video-pagination.html">Videos</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Actors</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Basketball</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Celebrity</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Cross</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="widget">
                    <h4 className="footer-title">Company</h4>
                    <div className="menu-about-container">
                      <ul className="menu">
                        <li className="menu-item">
                          <a href="contact-us.html">Company</a>
                        </li>
                        <li className="menu-item">
                          <a href="contact-us.html">Privacy Policy</a>
                        </li>
                        <li className="menu-item">
                          <a href="contact-us.html">Terms Of Use</a>
                        </li>
                        <li className="menu-item">
                          <a href="contact-us.html">Help Center</a>
                        </li>
                        <li className="menu-item">
                          <a href="contact-us.html">contact us</a>
                        </li>
                        <li className="menu-item">
                          <a href="pricing-style-1.html">Subscribe</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Our Team</a>
                        </li>
                        <li className="menu-item">
                          <a href="contact-us.html">Faq</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3  col-md-6">
                  <div className="widget">
                    <h4 className="footer-title">Downlaod App</h4>
                    <div className="row">
                      <div className="col-sm-12">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        <a href="#">
                          <img
                            src="images/asset-35.png"
                            className="gen-playstore-logo"
                            alt="playstore"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="images/asset-36.png"
                            className="gen-appstore-logo"
                            alt="appstore"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gen-copyright-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-12 align-self-center">
                  <span className="gen-copyright">
                    <a target="_blank" href="#">
                      {" "}
                      Copyright 2021 stremlab All Rights Reserved.
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer End */}
      {/* Back-to-Top start */}
      <div id="back-to-top">
        <a className="top" id="top" href="#top">
          {" "}
          <i className="ion-ios-arrow-up" />{" "}
        </a>
      </div>
      {/* Back-to-Top end */}
      {/* js-min */}
      {/* JS bootstrap */}
      {/* owl-carousel */}
      {/* counter-js */}
      {/* popper-js */}
      {/* Iscotop */}
    </main>
  )

  return jsx;
}
