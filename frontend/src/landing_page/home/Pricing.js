import React from "react";

function Pricing() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <h1 className="fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and pricing
            transparency in India. Flat fees no hidden charges.
          </p>
          <div>
            <a href="" style={{ textDecoration: "none" }}>
              See Pricing
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6 p-5">
          <div className="row">
            <div class="card" style={{ width: "16rem" }}>
              <div class="card-body">
                <h5 class="card-title text-center fs-3">
                  <i class="fa fa-inr" aria-hidden="true"></i> 0
                </h5>
                <p class="card-text text-center">
                  Free equity delivery and direct mutual funds
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "16rem" }}>
              <div class="card-body">
                <h5 class="card-title text-center fs-3">
                  <i class="fa fa-inr" aria-hidden="true"></i> 20
                </h5>
                <p class="card-text text-center">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
