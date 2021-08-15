import React from "react";

const DeleteButton = ({ rating }) => {
  return (
    <div className="col-sm">
      <span>Rating: {rating}</span>
      <button className="btn btn-warning delete">Delete</button>
    </div>
  );
};

export default DeleteButton;
