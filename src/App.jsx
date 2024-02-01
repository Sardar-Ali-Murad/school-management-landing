import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./Contact";

const App = () => {
  let [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    window.AOS.init({ // Initialization
      duration: 2000
    });
  });
  return (
    <div>
      {open && <Contact open={open} setOpen={setOpen} />}
      <ToastContainer />
      <div>
        <div id="navbar" className="navbar-area">
          <div className="desktop-nav">
            <div className="container-fluid">
              <div className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="index.html" rel="Canonical">
                  <img
                    src="images/log.png"
                    style={{ width: "350px" }}
                    alt="online learning management software"
                  />
                </a>

                <div className="others-options ms-auto">
                  <ul className="d-flex align-items-center">
                    <li onClick={() => setOpen(true)} style={{cursor:"pointer"}}>
                      <a className="default-btn">
                        <i className="ri-registered-line"></i>
                        <span>Request a Demo</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-area bg-1">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="banner-img">
                  <img
                    src="images/banner/banner-img-1.png"
                    alt="online learning management system software"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-content">
                  <h1>
                    Improve Your Online Learning Experience Better Instantly
                  </h1>
                  <p>
                    Welcome to our <span>cutting-edge</span> Learning Management
                    System, where knowledge meets innovation. Explore a world of{" "}
                    <span>limitless possibilities</span> in education.
                  </p>
                  <p>
                    <button
                      className="btn btn-outline-white"
                      onClick={() => setOpen(true)}
                      style={{cursor:"pointer"}}
                    >
                      Request a Demo
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="images/banner/shape-1.svg"
            className="shape shape-1"
            alt="best learning management system"
          />
          <img
            src="images/banner/shape-2.svg"
            className="shape shape-2"
            alt="learning content management system"
          />
          <img
            src="images/banner/shape-3.svg"
            className="shape shape-3"
            alt="online learning management system"
          />
        </div>
        <div className="courses-area pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <span className="top-title">Achievements</span>
              <h2>Trusted by the world's best Companies Achievements</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="achievement__item aos-init aos-animate"
                  data-aos="flip-up"
                  data-aos-delay="100"
                >
                  <div className="achievement__img ">
                    <img
                      loading="lazy"
                      width="60"
                      height="48"
                      src="images/icons/school.png"
                      className="attachment-full size-full"
                      alt="learning management system lms"
                      decoding="async"
                    />
                  </div>
                  <div className="achievement__info">
                    <h2 className="achievement__number">100+</h2>
                    <p>Registered Scools</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="achievement__item aos-init aos-animate"
                  data-aos="flip-up"
                  data-aos-delay="200"
                >
                  <div className="achievement__img bg-2">
                    <img
                      loading="lazy"
                      width="48"
                      height="48"
                      src="images/icons/users.png"
                      className="attachment-full size-full"
                      alt="learning management system features"
                      decoding="async"
                    />
                  </div>
                  <div className="achievement__info">
                    <h2 className="achievement__number">12K+</h2>
                    <p>Active Users</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="achievement__item aos-init aos-animate"
                  data-aos="flip-up"
                  data-aos-delay="300"
                >
                  <div className="achievement__img bg-3">
                    <img
                      loading="lazy"
                      width="48"
                      height="48"
                      src="images/icons/placeholder.png"
                      className="attachment-full size-full"
                      alt="top learning management system"
                      decoding="async"
                    />
                  </div>
                  <div className="achievement__info">
                    <h2 className="achievement__number">80+</h2>
                    <p>Geographic Reach</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="achievement__item aos-init aos-animate"
                  data-aos="flip-up"
                  data-aos-delay="400"
                >
                  <div className="achievement__img bg-4">
                    <img
                      loading="lazy"
                      width="40"
                      height="40"
                      src="images/icons/positive-review.png"
                      className="attachment-full size-full"
                      alt="learning management system features and benefits"
                      decoding="async"
                    />
                  </div>
                  <div className="achievement__info">
                    <h2 className="achievement__number">96.55</h2>
                    <p>Satisfiction Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="feature-dcourses-area bg-color-f6fafb pt-100 pb-70"
          id="feature"
        >
          <div className="section-title">
            <span className="top-title">Features</span>
            <h2>Explore Our Powerful Features</h2>
          </div>
          <div className="gray-bg-section py-5 bg-image">
            <div data-aos="zoom-in-up" className="bird-view-section">
              <div className="container my-3">
                <div className="row">
                  <div className="mt-5 col-12 col-sm-12 col-md-7 col-lg-7">
                    <div className="view-figure pe-0 pe-md-5 position-relative">
                      <figure>
                        <img
                          src="images/dash-1.png"
                          alt="features of learning management system"
                          className="img-fluid"
                          style={{ zIndex: "10", position: "relative" }}
                        />
                      </figure>
                      <div
                        className="shape1 position-absolute"
                        style={{ zIndex: "1" }}
                      >
                        <img
                          src="images/shape.png"
                          alt="learning system management"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 col-12 col-sm-12 col-md-5 col-lg-5 align-self-center">
                    <div className="view-content-block">
                      <div className="block-heading">
                        <span>1</span>
                        <h6>Bird's Eye View</h6>
                        <h2 className="after-border">Overview Dashboard</h2>
                      </div>
                      <p>
                        Experience the School Management system big picture with
                        our Bird's Eye View Dashboard. Gain instant insights
                        into your data, monitor key metrics, and make informed
                        decisions at a glance. Simplify complex information and
                        stay in control with our intuitive dashboard interface.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="bird-view-section">
              <div className="container my-3">
                <div className="row">
                  <div className="mt-5 col-12 col-sm-12 col-md-7 col-lg-7 order-1 order-md-2">
                    <div className="view-figure ps-0 ps-md-5 position-relative">
                      <figure>
                        <img
                          src="images/dash-2.png"
                          className="img-fluid"
                          alt="talent learning management system"
                          style={{ zIndex: "10", position: "relative" }}
                        />
                      </figure>
                      <div
                        className="shape2 position-absolute"
                        style={{ zIndex: "1" }}
                      >
                        <img
                          src="images/shape.png"
                          alt="student management system"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 col-12 col-sm-12 col-md-5 col-lg-5 align-self-center order-2 order-md-1">
                    <div className="view-content-block">
                      <div className="block-heading">
                        <span>2</span>
                        <h6 className="green-text">Faculty Administration</h6>
                        <h2 className="after-border">
                          Streamlining Faculty Administrative Operations for
                          Optimal Academic Excellence
                        </h2>
                      </div>
                      <p>
                        Effortlessly oversee your faculty members with our
                        comprehensive Faculty Management system. Streamline
                        scheduling, track performance, and enhance collaboration
                        among your teaching staff. With intuitive tools and
                        real-time updates, managing your faculty has never been
                        more efficient. Empower your educators to excel, and
                        watch your institution thrive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="bird-view-section">
              <div className="container my-3">
                <div className="row">
                  <div className="mt-5 col-12 col-sm-12 col-md-7 col-lg-7">
                    <div className="view-figure pe-0 pe-md-5 position-relative">
                      <figure>
                        <img
                          src="images/dash-3.png"
                          className="img-fluid"
                          alt="student attendance management system"
                          style={{ zIndex: "10", position: "relative" }}
                        />
                      </figure>
                      <div
                        className="shape1 position-absolute"
                        style={{ zIndex: "1" }}
                      >
                        <img
                          src="images/shape.png"
                          alt="student information management system"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 col-12 col-sm-12 col-md-5 col-lg-5 align-self-center">
                    <div className="view-content-block">
                      <div className="block-heading">
                        <span>3</span>
                        <h6 className="blue-text">
                          Academic Performance Overview
                        </h6>
                        <h2 className="after-border">
                          {" "}
                          Academic Performance Monitoring System
                        </h2>
                      </div>
                      <p>
                        Explore marks and results effortlessly through the
                        Academic Performance Overview feature. Gain insights
                        into progress, track achievements, and keep the
                        educational journey on the right path. With
                        user-friendly tools, accessing academic data has never
                        been easier. Stay informed and stay ahead in the
                        learning adventure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="bird-view-section">
              <div className="container my-3">
                <div className="row">
                  <div className="mt-5 col-12 col-sm-12 col-md-7 col-lg-7 order-1 order-md-2">
                    <div className="view-figure ps-0 ps-md-5 position-relative">
                      <figure>
                        <img
                          src="images/dash-4.png"
                          className="img-fluid"
                          alt="student enrollment management system"
                          style={{ zIndex: "10", position: "relative" }}
                        />
                      </figure>
                      <div
                        className="shape2 position-absolute"
                        style={{ zIndex: "1" }}
                      >
                        <img
                          src="images/shape.png"
                          alt="student database management system"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 col-12 col-sm-12 col-md-5 col-lg-5 align-self-center order-2 order-md-1">
                    <div className="view-content-block">
                      <div className="block-heading">
                        <span>4</span>
                        <h6 className="green-text">
                          Student Management System
                        </h6>
                        <h2 className="after-border">
                          Advanced Student Lifecycle Management Solution for
                          Educational Institutions
                        </h2>
                      </div>
                      <p>
                        Simplify enrollment, streamline communication, and
                        ensure a seamless educational experience for all.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="bird-view-section">
              <div className="container my-3">
                <div className="row">
                  <div className="mt-5 col-12 col-sm-12 col-md-7 col-lg-7">
                    <div className="view-figure pe-0 pe-md-5 position-relative">
                      <figure>
                        <img
                          src="images/dash-5.png"
                          className="img-fluid"
                          alt=""
                          style={{ zIndex: "10", position: "relative" }}
                        />
                      </figure>
                      <div
                        className="shape1 position-absolute"
                        style={{ zIndex: "1" }}
                      >
                        <img
                          src="images/shape.png"
                          alt="online student management system"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 col-12 col-sm-12 col-md-5 col-lg-5 align-self-center">
                    <div className="view-content-block">
                      <div className="block-heading">
                        <span>5</span>
                        <h6 className="blue-text">Exam Module</h6>
                        <h2 className="after-border">
                          Comprehensive Examination Management Module for
                          Effortless Test Creation
                        </h2>
                      </div>
                      <p>
                        Revolutionize your examination processes with our
                        cutting-edge Exam Module. From test creation and
                        administration to grading and result analysis, our
                        advanced system simplifies every aspect of the
                        examination lifecycle, providing a seamless and
                        efficient experience for educators and students alike.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="bird-view-section">
              <div className="container my-3">
                <div className="row">
                  <div className="mt-5 col-12 col-sm-12 col-md-7 col-lg-7 order-1 order-md-2">
                    <div className="view-figure ps-0 ps-md-5 position-relative">
                      <figure>
                        <img
                          src="images/dash-6.png"
                          className="img-fluid"
                          alt="student data management system"
                          style={{ zIndex: "10", position: "relative" }}
                        />
                      </figure>
                      <div
                        className="shape2 position-absolute"
                        style={{ zIndex: "1" }}
                      >
                        <img
                          src="images/shape.png"
                          alt="best student management system"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 col-12 col-sm-12 col-md-5 col-lg-5 align-self-center order-2 order-md-1">
                    <div className="view-content-block">
                      <div className="block-heading">
                        <span>6</span>
                        <h6 className="green-text">Website Configuration</h6>
                        <h2 className="after-border">
                          Website Configuration Made Simple
                        </h2>
                      </div>
                      <p>
                        Easily customize and manage your website's settings and
                        appearance with our Website Configuration Module.
                        Effortlessly update content, design elements, and user
                        permissions to create a tailored online experience that
                        reflects your institution's unique identity and meets
                        your specific needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="bird-view-section">
              <div className="container my-3">
                <div className="row">
                  <div className="mt-5 col-12 col-sm-12 col-md-7 col-lg-7">
                    <div className="view-figure pe-0 pe-md-5 position-relative">
                      <figure>
                        <img
                          src="images/dash-7.png"
                          className="img-fluid"
                          alt="student management system software"
                          style={{ zIndex: "10", position: "relative" }}
                        />
                      </figure>
                      <div
                        className="shape1 position-absolute"
                        style={{ zIndex: "1" }}
                      >
                        <img
                          src="images/shape.png"
                          alt="student record management system"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 col-12 col-sm-12 col-md-5 col-lg-5 align-self-center">
                    <div className="block-heading">
                      <span>7</span>
                      <h6 className="blue-text">Administrative Control Hub</h6>
                      <h2 className="after-border">
                        {" "}
                        Streamlined Educational Institution Operations, Student
                        Management, and Faculty Oversight
                      </h2>
                    </div>
                    <p>
                      Take control of your institution's operations and
                      administration with our Administrator Module. This
                      comprehensive toolkit empowers educational administrators
                      with the tools needed to efficiently manage student
                      records, faculty assignments, course scheduling, and more.
                      Streamline administrative tasks and enhance overall
                      efficiency, allowing your institution to focus on
                      delivering quality education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="bird-view-section">
            <div className="container my-3">
              <div className="row">
                <div className="mt-5 col-12 col-sm-12 col-md-7 col-lg-7 order-1 order-md-2">
                  <div className="view-figure ps-0 ps-md-5 position-relative">
                    <figure>
                      <img
                        src="images/dash-8.png"
                        className="img-fluid"
                        alt="student success management system"
                        style={{ zIndex: "10", position: "relative" }}
                      />
                    </figure>
                    <div
                      className="shape2 position-absolute"
                      style={{ zIndex: "1" }}
                    >
                      <img
                        src="images/shape.png"
                        alt="benefits of student management system"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 col-12 col-sm-12 col-md-5 col-lg-5 align-self-center order-2 order-md-1">
                  <div className="view-content-block">
                    <div className="block-heading">
                      <span>8</span>
                      <h6 className="green-text">Reports Module</h6>
                      <h2 className="after-border">
                        Advanced Reports and Analytics Module for In-Depth Data
                        Analysis
                      </h2>
                    </div>
                    <p>
                      Dive deep into insightful analytics, generate
                      comprehensive reports, and gain a holistic understanding
                      of your institution's performance. From attendance
                      tracking to assessment analysis, this robust tool empowers
                      you to make informed choices that drive academic
                      excellence and institutional success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="images/courses-shape.png"
          className="courses-shape"
          alt="student portal management system"
        />
      </div>
      <div className="feature-dcourses-area pt-5 pb-70">
        <div>
          <h5 className="text-center m-0">More Features</h5>
        </div>
        <div className="container">
          <div className="row my-5">
            <div className="col-12">
              <div className="row mt-5 pt-3">
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12  mb-60"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="service-items">
                    <div className="service-icon">
                      <img
                        src="images/feature icons/2.png"
                        alt="student profile management system"
                      />
                    </div>
                    <div className="service-text">
                      <h3>Daily Attendance</h3>
                      <p>Take your students attendance in a smart way</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12 mb-60"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="service-items">
                    <div className="service-icon">
                      <img
                        src="images/feature icons/3.png"
                        alt="advantages of student result management system"
                      />
                    </div>
                    <div className="service-text">
                      <h3>ClassName List</h3>
                      <p>
                        Manage your schools className list whenever you want.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12 mb-60"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="service-items">
                    <div className="service-icon">
                      <img
                        src="images/feature icons/4.png"
                        alt="learning activity management system"
                      />
                    </div>
                    <div className="service-text">
                      <h3>Subjects</h3>
                      <p>Add different subjects for different classNamees.</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12  mb-60"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="service-items">
                    <div className="service-icon">
                      <img
                        src="images/feature icons/1.png"
                        alt="learning content management system reviews"
                      />
                    </div>
                    <div className="service-text">
                      <h3>Manage Faculty</h3>
                      <p>Add and manage teachers from the portal.</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12  mb-60"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="service-items">
                    <div className="service-icon">
                      <img
                        src="images/feature icons/5.png"
                        alt="training and learning management system"
                      />
                    </div>
                    <div className="service-text">
                      <h3>Exams</h3>
                      <p>Schedule exams and grading system of classNamees.</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12  mb-60"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="service-items">
                    <div className="service-icon">
                      <img
                        src="images/feature icons/6.png"
                        alt="learning management system price"
                      />
                    </div>
                    <div className="service-text">
                      <h3>Routine</h3>
                      <p>Manage your schools className routine easily.</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12  mb-60"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <div className="service-items">
                    <div className="service-icon">
                      <img
                        src="images/feature icons/7.png"
                        alt="learning activity management system"
                      />
                    </div>
                    <div className="service-text">
                      <h3>Student Information</h3>
                      <p>Add your students information within a few minute</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12  mb-60"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <div className="service-items">
                    <div className="service-icon">
                      <img
                        src="images/feature icons/8.png"
                        alt="advantages of student management system"
                      />
                    </div>
                    <div className="service-text">
                      <h3>Syllabus</h3>
                      <p>Manage syllabuses based on the classNamees.</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12  mb-60"
                  data-aos="fade-up"
                  data-aos-delay="900"
                >
                  <div className="service-items">
                    <div className="service-icon">
                      <img
                        src="images/feature icons/9.png"
                        alt="cms learning management system"
                      />
                    </div>
                    <div className="service-text">
                      <h3>User Management</h3>
                      <p>Add multiple users for smooth management.</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12  mb-60"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <div className="service-items">
                    <div className="service-icon">
                      <img
                        src="images/feature icons/10.png"
                        alt="e learning content management system"
                      />
                    </div>
                    <div className="service-text">
                      <h3>Institute Management</h3>
                      <p>Efficiently Manage Your Institute with Ease.</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12  mb-60"
                  data-aos="fade-up"
                  data-aos-delay="1100"
                >
                  <div className="service-items">
                    <div className="service-icon">
                      <img
                        src="images/feature icons/11.png"
                        alt="creating a learning management system"
                      />
                    </div>
                    <div className="service-text">
                      <h3>Results</h3>
                      <p>Access each className result with a Click.</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12  mb-60"
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  <div className="service-items">
                    <div className="service-icon">
                      <img
                        src="images/feature icons/12.png"
                        alt="features of a learning management system"
                      />
                    </div>
                    <div className="service-text">
                      <h3>Reports</h3>
                      <p>Comprehensive Insights at Your Fingertips.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="transform-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 wow animate__animated animate__fadeInLeft delay-0-2s"
              data-aos="zoom-in-up"
              data-aos-delay="500"
            >
              <div className="transform-conetnt wow animate__animated animate__fadeInLeft delay-0-8s">
                <h2>Transform Your Life Through Online Management</h2>
                <p>
                  Unlock a world of possibilities and transform your journey
                  with our cutting-edge online management platform. From
                  seamless access to progress tracking, we empower you to take
                  charge of your institute management experience, all from the
                  comfort of your own space.
                </p>
                <a className="default-btn" onClick={() => setOpen(true)} style={{cursor:"pointer"}}>
                  Request a Demo
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 wow animate__animated animate__fadeInRight delay-0-2s"
              data-aos="zoom-in-up"
              data-aos-delay="500"
            >
              <div className="transform-img wow animate__animated animate__fadeInRight delay-0-8s">
                <img
                  src="images/transform-img.png"
                  alt="e learning management system software"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="our-features-area bg-color-f1efee pt-100 pb-70"
        id="expertise"
      >
        <div className="container">
          <div className="section-title">
            <span className="top-title">For Everyone</span>
            <h2>Why to Choose Cloud School</h2>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6 mb-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="single-features h-100">
                <img
                  src="images/features/no-coding.png"
                  alt="e learning learning management system"
                />
                <h3>No coding knowledge is required</h3>
                <p>
                  Its super easy to work with Cloud School. You can operate this
                  application without any coding knowledge. Allyou just need is
                  the basic knowledge of operating a computer.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 mb-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="single-features h-100">
                <img
                  src="images/features/institute.png"
                  alt="creating a learning management system"
                />
                <h3>Fit for any educational institution</h3>
                <p>
                  Cloud School is the best SAAS application for any school,
                  college, and other related institute.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6  mb-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="single-features h-100">
                <img
                  src="images/features/user-friendly.png"
                  alt="cost of learning management system"
                />
                <h3>User-friendly Application.</h3>
                <p>
                  Cloud School is designed to manage your activities easily. Our
                  team is continuosly updating to make the application more
                  optimized and user-friendly.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 mb-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="single-features h-100">
                <img
                  src="images/features/reliable.png"
                  alt="best small business learning management system"
                />
                <h3>Most reliable application</h3>
                <p>
                  Cloud School is one of the most reliable application. More
                  than 2000+ institutes around the world working with us.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="images/features/feature-shape-1.svg"
          className="shape shape-1"
          alt="best online learning management system"
        />
      </div>
      <div className="testimonial-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="testimonial-img">
                <img
                  src="images/testimonials/testimonial-1.png"
                  alt="best learning content management system"
                />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <div className="testimonials-conetent">
                <h2>Our Users Are Our Strength. See What They Say About Us</h2>
                <div className="row">
                  <div
                    className="col-sm-6"
                    data-aos="flip-left"
                    data-aos-delay="1000"
                  >
                    <figure className="snip1192">
                      <blockquote>
                        Absolutely blown away by the Bird's Eye View Dashboard!
                        As someone who's not a tech wizard, I appreciate how
                        intuitive it is. I can finally keep tabs on all the
                        important metrics without feeling like I'm deciphering a
                        secret code. The simplicity of the interface is a
                        game-changer—I've gone from drowning in data to riding
                        the waves of insights effortlessly. Major kudos to the
                        creators for making my professional life so much
                        smoother!
                      </blockquote>
                      <div className="author">
                        <img
                          src="images/testimonials/1.jpg"
                          alt="benefits of learning management system to students"
                        />
                        <h5>
                          Eleanor Faint<span> LittleSnippets</span>
                        </h5>
                      </div>
                    </figure>
                  </div>
                  <div
                    className="col-sm-6"
                    data-aos="flip-left"
                    data-aos-delay="1000"
                  >
                    <figure className="snip1192 hover">
                      <blockquote>
                        Thrilled with the Bird's Eye View Dashboard! As a tech
                        novice, I appreciate its user-friendliness. Tracking
                        metrics is now a breeze, and the straightforward
                        interface is a game-changer. Kudos to the creators for
                        streamlining my professional life!The interface's
                        simplicity is a game-changer—I've transitioned from
                        drowning in data to effortlessly riding the waves of
                        insights. Huge props to the creators for making my
                        professional life!
                      </blockquote>
                      <div className="author">
                        <img
                          src="images/testimonials/2.jpg"
                          alt="best enterprise learning management system"
                        />
                        <h5>
                          Max Conversion<span> LittleSnippets</span>
                        </h5>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-area pb-5" id="faq">
        <div className="container">
          <h2 className="text-center mb-5">FAQ</h2>
          <div
            className="accordion"
            id="accordionExample"
            data-aos="zoom-in-up"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is a Cloud School?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Cloud School is a software platform designed to facilitate the
                  management, delivery, and tracking of educational content and
                  training programs. It helps organizations and educators
                  create, administer, and monitor online courses and learning
                  materials.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How can Cloud School benefit my organization or educational
                  institution?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Cloud School offers several benefits, including centralized
                  content management, the ability to reach a wider audience
                  through online learning, tracking and reporting on learner
                  progress, automation of administrative tasks, and scalability
                  for growing educational needs.{" "}
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What features should I look for when choosing an Cloud School
                  for my organization?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  When selecting an Cloud School, consider features like course
                  creation and customization, user management, assessment tools,
                  reporting and analytics, integration capabilities,
                  mobile-friendliness, and data security to ensure it aligns
                  with your specific needs.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Is technical expertise required to use an Cloud School?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  This Cloud School platforms are designed to be user-friendly,
                  with intuitive interfaces that require minimal technical
                  expertise. However, some familiarity with basic computer
                  operations and content management may be beneficial.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-area bg-color-f6fafb pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-footer-widget">
                <p>
                  Elevate your online learning experience instantly with our
                  transformative solutions.Discover a world of enhanced
                  engagement, efficiency, and excellence in education.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-footer-widget pl-40">
                <h3>Quick Link</h3>
                <ul className="import-link">
                  <li>
                    <a href="#feature">Features</a>
                  </li>
                  <li>
                    <a href="#expertise">Experties</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-footer-widget pl-40">
                <h3>Demo</h3>
                <p>
                  Request a Demo and Unlock the Future of Learning Today. See
                  our platform in action and experience the difference
                  firsthand.
                </p>
                <span>
                  <a className="default-btn" onClick={() => setOpen(true)} style={{cursor:"pointer"}}>
                    <span>Request a Demo</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="images/footer-shape-1.png"
          className="shape shape-1"
          alt="learning management system consulting"
        />
        <img
          src="images/footer-shape-2.png"
          className="shape shape-2"
          alt="learning management system solutions"
        />
      </div>

      <div
        style={{
          position: "fixed",
          zIndex: "9999",
          top: "16px",
          left: "16px",
          right: "16px",
          bottom: "16px",
          pointerEvents: "none",
        }}
      ></div>
      <div className="go-top" style={{ display: "none" }}>
        <i className="bx bx-chevron-up"></i>
      </div>
    </div>
  );
};

export default App;
