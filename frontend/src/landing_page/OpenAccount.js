import React from "react";

function OpenAccount() {
  return (
    <div className="conatiner mb-5 p-5">
      <div className="row text-center">
        <h1>Open a Zerodha account</h1>
        <p>
          Modern plateform and apps.{" "}
          <i class="fa fa-inr" aria-hidden="true"></i>0 invesments and flat{" "}
          <i class="fa fa-inr" aria-hidden="true"></i>20 intraday and F&Q
          trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "14%", margin: "0 auto" }}
        >
          Start Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
