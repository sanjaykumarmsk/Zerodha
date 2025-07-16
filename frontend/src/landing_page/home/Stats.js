import React from "react";

function Stats() {
  return (
    <div className="container mb-5 p-5">
      <div className="row">
        <div className="col-sm-6 mb-5 p-5">
          <h1 className="mb-5 fs-2">Trust with confidence</h1>
          <h3 className="fs-5">Customer-first always</h3>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zeroda with ₹3.5+ lakh crore
            worth of equity invesments.
          </p>
          <h3 className="fs-5">No spam or gimmicks</h3>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps tht you use at your space, the way you like.
          </p>
          <h3 className="fs-5">The Zerodha universe</h3>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our invesments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="fs-5">Do better with money</h3>
          <p className="text-muted">
            with initiatives like Nudge and kill Switch, we don,t just
            facilitate transactions, but activity help you do better with your
            money.
          </p>
        </div>
        <div className="col-sm-6 p-5">
          <img
            src="media/images/ecosystem.png"
            class="img-fluid"
            style={{ width: "90%" }}
          />
          <div className="tect-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try kite demo
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
