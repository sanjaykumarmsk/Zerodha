import React from "react";

function Brokerage() {
  return (
    <div className="container border-top mt-5 p-5 text-center">
      <div className="row">
        <div className="col-4">
          <img src="media/images/pricing0.svg" />
          <h3>Free equity delivery</h3>
          <h6 className="text-muted p-4">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </h6>
        </div>
        <div className="col-4">
          <img src="media/images/pricing20.svg" />
          <h3>Intraday and F&O trades</h3>
          <h6 className="text-muted p-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </h6>
        </div>
        <div className="col-4">
          <img src="media/images/pricing0.svg" />
          <h3>Free direct MF</h3>
          <h6 className="text-muted p-4 ">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
