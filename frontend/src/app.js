import React from "react";
import "./index.css";
import "./index.js";
import { Helmet } from "react-helmet";

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Zerodha</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        ...
      </div>
    );
  }
}
