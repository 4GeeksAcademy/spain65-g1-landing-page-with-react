import React from "react";

const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-secondary bg-opacity-50 rounded-3 text-start">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
          <p className="col-l-12 col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices iaculis nisi, in semper felis placerat nec. Vestibulum feugiat sollicitudin mauris et tincidunt. Integer sit amet bibendum quam. Phasellus eget ipsum scelerisque, </p>
          <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
        </div>
      </div>
    );

};

export default Jumbotron;