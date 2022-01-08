import DropDownMenu from "./dropdownmenu/DropDownMenu"
import "./resNavBar.css"

export default function ResNavBar() {
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
                <i class="dropDownBars fas fa-bars"></i>
                
            </div> 
                      
        </div>
        <DropDownMenu /> 
        </>
        
        
    )
}
