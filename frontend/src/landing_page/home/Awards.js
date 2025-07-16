import React from "react";

function Awards() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media/images/largestBroker.svg"
            class="img-fluid"
            alt="award-image"
          />
        </div>
        <div className="col-sm-6 p-5">
          <h1 className="fs-2">Largest stock broker in India</h1>
          <p className="mb-5 fs-7">
            2+ mellion Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-sm-6 fs-8">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Grow</p>
                </li>
              </ul>
            </div>
            <img
              src="media/images/pressLogos.png"
              alt="companies-logo"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
