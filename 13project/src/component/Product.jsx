import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Reduxstorage/slice";
import { useEffect } from "react";
import { productSlice } from "../Reduxstorage/productSlice";

const Product = () => {

const dispatch = useDispatch()

useEffect(()=>{
    dispatch(productSlice())
},[])

  return (
    <div className="products">
      {" "}
      <div className="product-card">
        {" "}
        <img
          className="product-image"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
          alt="Running Shoes"
        />{" "}
        <div className="product-info">
          {" "}
          <h2 className="product-title"> Running Shoes </h2>{" "}
          <p className="product-description">
            {" "}
            Comfortable and lightweight shoes for everyday running.{" "}
          </p>{" "}
          <div className="rating"> ★★★★★ </div> <div className="price"> ₹2,499 </div>{" "}
          <button onClick={()=>dispatch(addItem(1))} className="btn"> Add to Cart </button>{" "}
          <button onClick={()=>dispatch(removeItem(1))} className="btn removeitem"> Remove from Cart </button>{" "}

        </div>{" "}
      </div>{" "}
    </div>
  );
};



export default Product