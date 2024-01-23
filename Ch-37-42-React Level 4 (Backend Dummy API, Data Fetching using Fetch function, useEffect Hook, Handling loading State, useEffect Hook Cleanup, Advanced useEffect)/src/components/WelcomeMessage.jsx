import React from "react";
function WelcomeMessage({ onGetPostsClick }) {
  return (
    <center className="welcome-message">
      <h1>There are no Posts.</h1>
      <button
        type="button"
        onClick={onGetPostsClick}
        className="btn btn-primary"
      >
        Get posts from server
      </button>
    </center>
  );
}

export default WelcomeMessage;
