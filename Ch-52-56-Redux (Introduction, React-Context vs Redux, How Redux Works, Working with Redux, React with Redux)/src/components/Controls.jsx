import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Controls() {
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary">
        +1
      </button>
      <button type="button" className="btn btn-success">
        -1
      </button>
    </div>
  );
}

export default Controls;
