import React from 'react';
import './Navbar.css';
import Search from '../Search/Search.jsx';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

function Navbar({ handleChange}) {
  
  return (
    <div>
      <div className="Logo">LOGO</div>
      <div className="list">
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li>
            <Link to="/">Магазин</Link>
          </li>
          <li>
            <Link to="/Коллекции">Коллекции</Link>
          </li>
          <li>
            <Link to="/Покупателям">Покупателям</Link>
          </li>
          <li>
            <Link to="/О нас">О нас</Link>
          </li>
        </ul>
      </div>
      <Search handleChange={handleChange} />
      <div className="topIcons">
        <FavoriteBorderIcon sx={{ marginRight: "20px" }} />
        <ShoppingBagOutlinedIcon sx={{ marginRight: "20px" }} />
        <AccountCircleOutlinedIcon sx={{ marginRight: "20px" }} />
      </div>
    </div>
  );
}

export default Navbar