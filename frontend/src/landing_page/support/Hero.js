import React from "react";

function Hero() {
  return (
    <div class="p-3 mb-2 bg-primary text-white">
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 text-start mb-5">
            <h5>Support Portal</h5>
          </div>
          <div className="col-6 text-end text-white">
            <a href="" style={{ color: "white" }}>
              Track tickets
            </a>
          </div>
          <div className="col-6">
            <h5>
              Search for an answer or browse help topics to create a ticket
            </h5>
            <div class="input-group mt-4">
              <input
                type="text"
                class="form-control"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              ></input>
              <button style={{ border: "none", background: "white" }}>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="mt-4">
              <a href="" style={{ marginRight: "22px", color: "white" }}>
                Track account opening
              </a>
              <a href="" style={{ marginRight: "22px", color: "white" }}>
                Track segment activation
              </a>
              <a href="" style={{ marginRight: "22px", color: "white" }}>
                Intraday margins
              </a>
              <br />
              <a href="" style={{ marginRight: "30px", color: "white" }}>
                Kite user manual
              </a>
            </div>
          </div>
          <div className="col-6 mb-5 p-5">
            <h5>Featured</h5>
            <div className="p-4">
              <h6>
                1.{" "}
                <a href="" style={{ color: "white" }}>
                  {" "}
                  Current Takeovers and Delisting - June 2024
                </a>
              </h6>
              <h6 className="mt-4">
                2.{" "}
                <a href="" style={{ color: "white" }}>
                  {" "}
                  Latest Intraday leverages and Square-off timings
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
