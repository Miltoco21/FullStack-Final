import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <div class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
