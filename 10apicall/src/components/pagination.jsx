import React from "react";
import { useState } from "react";

const pagination = ({ page, setPage }) => {
 

  const handlePrevious = () => {
   
      setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const nextbtn = Array.from({ length: 3 }, (_, index) =>page + index)
  const previousbtn = Array.from({ length: 2 }, (_, index) => page - 1- index).filter((item) => item > 0).reverse()
  const mergedbtn = [...previousbtn, ...nextbtn]

  return (
    <div className="d-flex justify-content-center gap-2 mt-4 mb-4">
      
      {page>1 ? (
        <button
          onClick={handlePrevious}
          className="btn btn-primary bg-dark border-0"
        >
          Previous
        </button>
      ) : null}
      
      {mergedbtn.map((item) => {return (
        <button onClick={() => setPage(item)} className={item==page ? "btn btn-primary bg-white text-dark border border-dark" : "btn btn-primary bg-dark border-0"}>{item}</button>)})}
      
      <button onClick={handleNext} className="btn btn-primary bg-dark border-0">
        Next
      </button>
        
      </div>
   
  );
};

export default pagination;


