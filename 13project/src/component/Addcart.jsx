import { useSelector } from "react-redux"

const Addcart = () => {

    const select = useSelector((state)=>state.cart.value)
    

  return (

     <div className="cart">
             <span className="cart-icon">🛒</span>
              <span>Cart</span>
               <span className="cart-count">{select}</span> 
               </div> 
  )
}

export default Addcart