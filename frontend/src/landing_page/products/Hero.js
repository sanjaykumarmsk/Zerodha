import React from "react";

function Hero() {
  return (
    <div className="container border-bottom p-5">
      <div className="row text-center">
        <h1 className="fs-2 p-2">Technology</h1>
        <h4 className="fs-5 p-2 text-muted">
          Sleek, modern and intutive trading plateform
        </h4>
        <h6 className="fs-6 p-2 text-muted">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            invesment offerings
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </h6>
      </div>
    </div>
  );
}

export default Hero;
