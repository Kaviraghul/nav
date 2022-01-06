import { Link } from 'react-router-dom';
import DropDown from "./DropDown/DropDown";
import "./navbar2.css";
import { useState } from 'react';

export default function NavBar2() {
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
        <div className="navbar2">
            <div className="navbar2left">
                <span className="navbar2Logo">logo</span>
            </div>
            <div className="navbar2center">
                <ul className="navbar2menu">
                    <li className="navbar2menulist" ><Link to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link></li>
                    <li className="navbar2menulist"><Link to="/about_us" style={{textDecoration:"none", color:"inherit"}}>ABOUT US</Link></li>
                    <li className="navbar2menulist" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                        <Link to="/categories" style={{textDecoration:"none", color:"inherit"}}>CATEGORIES</Link>
                        {dropdown && <DropDown />}
                        
                    </li>
                    <li className="navbar2menulist" ><Link to="/log_in" style={{textDecoration:"none", color:"inherit"}}>LOG IN</Link></li>
                </ul>
            </div>
            <div className="navbar2right">
               <div className="navbar2searchbar">
                 <i class=" navbar2icon fa fa-search" ></i>
               </div>
               
               <i class=" navbar2profileicon far fa-user-circle"></i>

            </div>
        </div>
        </>
        
    )
}
