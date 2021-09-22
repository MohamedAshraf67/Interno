import './NavBar.css'
import React from "react";
import { Link } from "react-router-dom";
import logo from './assets/Logo.png'
class NavBar extends React.Component {
    render() {
        return (
            <div className="nav">
                <ul>
                    <img src={logo} className=".homepage .component51 .component41 .component21 .component11 .logo"></img>
                    <Link className='link' to="/universityinternships"> <li className=".homepage .component51 .component41 .component21 .universityinternships"> University Internships </li> </Link>
                    <Link className='link' to="/highschoolinternships"> <li className=".homepage .component51 .component41 .component21 .highSchoolinternships"> High School Internships </li> </Link>
                    <Link className='link' to="/Essentials"> <li className=".homepage .component51 .component41 .component21 .essentials"></li> Essentials </Link>
                    <Link className='link' to="/about"> <li className=".homepage .component51 .component41 .component21 .about"></li> About </Link>
                    <img className=".homepage .component51 .component41 .rectangle7"></img>
                    <Link className='link' to="/signup"> <li className=".homepage .component51 .becomeAnintern"></li> Become An Intern </Link>
                </ul>
            </div>
        );
    }
}

export default NavBar;