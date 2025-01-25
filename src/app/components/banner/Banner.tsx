// ./components/banner/Bannermain.js
import React from "react";

const BannerMain = ({ avatar, message, term, onClose }) => {
  return (
    <div className="alert-message">
      <div
        className="alert alert-success rounded-pill d-flex align-items-center justify-content-between border-success mb-4"
        role="alert"
      >
        <div className="d-flex align-items-center">
          <span className="me-1 avatar avatar-sm flex-shrink-0">
            <img src={avatar} alt="Avatar" className="img-fluid rounded-circle" />
          </span>
          <p>
            {message} <strong className="mx-1">“{term}”</strong>
          </p>
        </div>
        <button
          type="button"
          className="btn-close p-0"
          aria-label="Close"
          onClick={onClose}
        >
          <span>
            <i className="ti ti-x"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default BannerMain;
