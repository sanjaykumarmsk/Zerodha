import React from "react";

function Hero() {
  return (
    <div className="container p-2">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="img-fluid "
          style={{ height: "400px" }}
        />
        <h1 className="fs-2">Invest in everything</h1>
        <p className="fs-8">
          Online plateform to invest in stopcks, derivatives, mutual funds
        </p>
        <button
          className="p-2 btn btn-primary mx-auto fs-6 mb-5"
          style={{ width: "18%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
