import './navbar1.css';

export default function NavBar1() {
    return (
        <div className = "navBar1">
            <div className='navBarLeft'>
                <span>Logo</span>
            </div>
            <div className='navBarCenter'>
                <ul className = "navBarList">
                    <li className='navBar1ListItems'>list 1</li>
                    <li className='navBar1ListItems'>list 2</li>
                    <li className='navBar1ListItems'>list 3</li>
                    <li className='navBar1ListItems'>list 4</li>
                </ul>
            </div>
            <div className='navBarRight'>
                <span><i class="navBarIcon fas fa-search"></i></span>
                <img className='navBarProfileImage' src="https://cdn4.vectorstock.com/i/thumb-large/84/68/hipster-man-in-glasses-avatar-profile-userpic-vector-8988468.jpg" alt="profile picture" />
            </div>
            
            
            
        </div>
    )
}
