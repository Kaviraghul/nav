import DropDown from "./DropDown/DropDown";
import "./navbar2.css";

export default function NavBar2() {
    return (
        <>
        <div className="navbar2">
            <div className="navbar2left">
                <span className="navbar2Logo">logo</span>
            </div>
            <div className="navbar2center">
                <ul className="navbar2menu">
                    <li className="navbar2menulist">HOME</li>
                    <li className="navbar2menulist">ABOUT US</li>
                    <li className="navbar2menulist">CATEGORIES</li>
                    <li className="navbar2menulist">LOG IN</li>
                </ul>
            </div>
            <div className="navbar2right">
               <div className="navbar2searchbar">
                 <i class=" navbar2icon fa fa-search" ></i>
               </div>
               
               <i class=" navbar2profileicon far fa-user-circle"></i>

            </div>
        </div>
        <DropDown />
        </>
        
    )
}
