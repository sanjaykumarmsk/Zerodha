import React from "react";
import otpInput from "react-otp-input";

function Signup() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media/images/signup.png"
            alt="Signup"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-2">Signup now</h1>
          <h6 className="text-muted fs-5">
            Or track your existing application.
          </h6>
          <form>
            <div className="form-group">
              <fieldset>
                <legend>Mobile number</legend>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">+91</span>
                  </div>
                  <div class="col-xs-2">
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNumber"
                    placeholder="Enter your mobile number"
                  ></input>
                  </div>
                </div>
              </fieldset>
            </div>
          </form>
          <p className="text-muted" style={{ fontSize: "13px" }}>
            You will receive an OTP on your number
          </p>
          <button
            style={{
              background: "#03bafc",
              border: "none",
              width: "135px",
              height: "35px",
              color: "white",
              margin: "auto",
            }}
          >
            Continue
          </button>
          <div className="mt-3">
            <a href="#" style={{ textDecoration: "none", fontSize: "14px" }}>
              Want to open an NRI account?
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <p className="text-center text-muted" style={{ fontSize: "14px" }}>
          I authorise Zerodha to contact me even if my number is registered on
          DND. I authorise Zerodha to fetch my KYC information from the C-KYC
          registry with my PAN.
          <br /> Please visit{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            this article
          </a>{" "}
          to know more.
        </p>
        <p className="text-center text-muted" style={{ fontSize: "14px" }}>
          If you are looking to open a HUF, Corporate, Partnership, or NRI
          account, you have to use the{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            offline forms.
          </a>{" "}
          For help,{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            click here.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
