import './NavBar.css'
import React from "react";
import { Link } from "react-router-dom";
import logo from './assets/Logo.png'
class NavBar extends React.Component {
    render() {
        return (
            <div className="nav">
                <img src={logo} className="img"></img>
                <Link to = "/universityinternships"><text className="UI">University Internships</text></Link>
                <Link to = "/highschoolinternships"><text className="HI">High School Internships</text></Link>
                <Link to = "/Essentials"><text className="ES">Essentials</text></Link>
                <Link to = "/about"><text className="AB">About</text></Link>
                <Link to = "/signup"><button className="BU">Become An Intern</button></Link>
                {/*<ul className="nav1">
                    <Link className='link' to="/universityinternships"> <li className="homepage component51 component41 component21 universityinternships"></li> </Link>
                    <img src={logo} className="homepage component51 component41 component21 component11 logo"></img>
                    <Link className='link' to="/highschoolinternships"> <li className="nav-link">HI</li> </Link>
                    <Link className='link' to="/Essentials"> <li className="homepage component51 component41 component21 essentials"></li></Link>
                    <Link className='link' to="/about"> <li className="homepage component51 component41 component21 about"></li></Link>
                    <img className="homepage component51 component41 rectangle7"></img>
        <Link className='link' to="/signup"> <li className="homepage component51 becomeAnintern"></li></Link>
                </ul>*/}
            </div>
        );
    }
}

export default NavBar;