import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60896.68722762235!2d78.39558739999998!3d17.457658200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f08e54eb3f%3A0x3128d84171b9c1a0!2sTaaza%20Kitchen!5e0!3m2!1sen!2sin!4v1674470019971!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        className="w-100 form-control"
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0 ">
                      <li className="mb-3  gap-15 d-flex align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Hno:277 , Near village chopal , Mandaura, Sonipat,
                          Hsryana
                        </address>
                      </li>
                      <li className="mb-3  gap-15 d-flex align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+91 6301716094">+91 6301716094</a>
                      </li>
                      <li className="mb-3  gap-15 d-flex align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:madhu@gmail.com">madhu@gmail.com</a>
                      </li>
                      <li className="mb-3  gap-15 d-flex align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday-friday 10AM-8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
