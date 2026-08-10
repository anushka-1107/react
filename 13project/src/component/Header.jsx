import Addcart from "./Addcart";

const Header = () => {
  return (
    <header className="header">
      <div className="logo"> Shopzzzz </div>
      <nav className="nav">
        <ul>
          
            {" "}
            <a href="#">Home</a>{" "}
          
          
            {" "}
            <a href="#">Products</a>{" "}
          
          
            {" "}
            <a href="#">About</a>{" "}
         
            {" "}
            <a href="#">Contact</a>{" "}
         
        </ul>
      </nav>
      <Addcart/>
    </header>
  );
};

export default Header;
