import React from "react";

function Product(props) {
  return (
    <>
      <div className="row">
        <div className="col-5">
          <h2>
            {props.product.name}
            <span className="badge bg-secondary">₹{props.product.Price}</span>
          </h2>
        </div>
        <div className="col-2">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => props.decrementQuantity(props.index)}
            >
              -
            </button>
            <button type="button" className="btn btn-warning">
              {props.product.Quantity}
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => props.incrementQuantity(props.index)}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-2">
          ₹{props.product.Price * props.product.Quantity}
        </div>
        <div className="col-3">
          <button
            className="btn btn-danger col-4"
            onClick={() => props.removeItem(props.index)}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
