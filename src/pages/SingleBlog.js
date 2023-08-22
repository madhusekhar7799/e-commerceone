import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg"

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
                </Link>
                <h3>A Beautiful Sunday Morning Renaissance</h3>
                <img
                  src={blog}
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  You're only as good as your last collection, which is an
                  enormous presure. I think there is something about luxury -
                  it's not something people need, but ts whst they want . It
                  really pulls at their heart. I have fantastick relationship
                  with money. Scelerisque sociosqu You're only as good as your
                  last collection, which is an enormous presure. I think there
                  is something about luxury - it's not something people need,
                  but ts whst they want .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
