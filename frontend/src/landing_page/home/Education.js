import React from "react";

function Education() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/education.svg" class="img-fluid" />
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-2">Free and open market education</h1>
          <p>
            Varsity the largest online market educstion book in the world
            covering everything from the basics to advenced reading.
          </p>
          <div className="mb-5">
            <a href="" style={{ textDecoration: "none" }}>
              Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <p>
            Trading Q&A, the most active trading and invesment community in
            India for all market related queries.
          </p>
          <div>
            <a href="" style={{ textDecoration: "none" }}>
              Trading Q&A{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
