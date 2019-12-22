import React, { Fragment } from "react";

const NotFound = () => {
  return (
      <Fragment>
          <h1 className="x-large text-primary">
              <i className="fas fa-exclamation-triangle"></i> Page Not NotFound
              <p className="large">Sorry, the page does not exists</p>
          </h1>
      </Fragment>
  );
};

NotFound.propTypes = {};

export default NotFound;
