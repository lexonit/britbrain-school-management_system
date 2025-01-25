
import React from "react";

const Banner2 = ({ username, profileLink, lastUpdated }) => {
  return (
    <div className="card bg-dark">
      <div className="overlay-img">
        <img
          src="images/shape-04.png"
          alt="img"
          className="img-fluid shape-01"
        />
        <img
          src="images/shape-01.png"
          alt="img"
          className="img-fluid shape-02"
        />
        <img
          src="images/shape-02.png"
          alt="img"
          className="img-fluid shape-03"
        />
        <img
          src="images/shape-03.png"
          alt="img"
          className="img-fluid shape-04"
        />
      </div>
      <div className="card-body">
        <div className="d-flex align-items-xl-center justify-content-xl-between flex-xl-row flex-column">
          <div className="mb-3 mb-xl-0">
            <div className="d-flex align-items-center flex-wrap mb-2">
              <h1 className="text-white me-2">Welcome Back, {username}</h1>
              <a
                href={profileLink}
                className="avatar avatar-sm img-rounded bg-gray-800 dark-hover"
              >
                <i className="ti ti-edit text-white"></i>
              </a>
            </div>
            <p className="text-white">Have a Good day at work</p>
          </div>
          <p className="text-white">
            <i className="ti ti-refresh me-1"></i>Updated Recently on {lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
