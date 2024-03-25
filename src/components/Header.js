import React from "react";
import "../styles/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Header() {
  const [{cart, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user) {
      signOut(auth).then(() => {
        // Sign-out successful.
        console.log("Signout Successful for user ")
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
    }
  }

  return (
    <div className="header">
    <Link to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Logo"
      />
      </Link>
      <div className="header__search">
        <input 
        className="header__searchInput" 
        type="text" />
        <SearchIcon
            className="header__searchIcon"
        />
      </div>

        {/* Add the div for India flag icon */}
        <div className="header__flag">
        {/* Insert India flag icon here */}
    </div>
      <div className="header__nav">
      <Link to={!user && "/login"}>
        <div 
        onClick={handleAuthentication}
        className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
        <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
        <div className="header__optionBasket">
            <ShoppingCartOutlinedIcon/>
            <span className="header__optionLineTwo 
            header__basketCount">
                {cart?.length}
            </span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
