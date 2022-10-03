import React from "react";

export default function Product(props) {
  let totalPrice = Number(props.product.quantity) * Number(props.product.price)
  return (
    <div className="row">
      <div className="col-6">
        <h2>
          {props.product.model}{" "}
          <span className="badge bg-secondary">₹{props.product.price}</span>{" "}
        </h2>
      </div>
      <div className="col-4">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-red">
            -
          </button>
          <button type="button" className="btn btn-blue">
            {props.product.quantity}
          </button>
          <button type="button" className="btn btn-green">
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        <h3>₹{totalPrice}</h3>
      </div>
    </div>
  );
}
