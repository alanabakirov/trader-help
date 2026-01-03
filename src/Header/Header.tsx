import { NavLink } from "react-router-dom";
function Header(){
    return (
        <div className="header">
            <ul className="header_ul">
                <li className="header_li">
                    <NavLink  to='/'>Main</NavLink>
                </li>
                <li className="header_li">
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li className="header_li">
                    <NavLink to='/tasks'>Tasks</NavLink>
                </li>
                <li className="header_li">
                    <NavLink to='/stocks'>Stocks</NavLink>
                </li>
            </ul>  
        </div>
    )
}

export default Header;