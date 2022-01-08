import DropDownMenu from "./dropdownmenu/DropDownMenu"
import "./resNavBar.css"
import { useState } from "react"

export default function ResNavBar() {
    const [drop, setDrop] = useState(false);
    return (
        <>
        <div className='resNavBar'>
            <div className='navBarLeft'>
                LOGO
            </div>
            <div className='navBarCenter'>
                <ul className='resNavBarMenu'>
                    <li className='resNavBarItems'>HOME</li>
                    <li className='resNavBarItems'>ABOUT</li>
                    <li className='resNavBarItems'>CONTACT</li>
                    <li className='resNavBarItems'>CATEGORIES</li>
                </ul>
            </div>
            <div className='navBarRight'>
                <ul className='resNavBarMenu'>
                    <li className='resNavBarItems'>LOGIN</li>
                    <li className='resNavBarItems'>REGISTER</li>
                </ul>
                <i class="dropDownBars fas fa-bars" onClick={drop? () =>setDrop(false): () =>setDrop(true)}></i>
                
            </div> 
                      
        </div>
        {drop && <DropDownMenu /> }
        
        </>
        
        
    )
}
