import React from "react";
import { Link } from "react-router-dom";
class NavBar extends React.Component {
    render() { 
        return (
            <div className="nav">
                <ul>
                    <Link className='link' to="/home"> <li className="nav-bar-1">Interno</li> </Link>
                    <Link className='link' to="/universityinternships"> <li className="nav-bar-1"> University Internships </li> </Link>
                    <Link className='link' to="/highschoolinternships"> <li className="nav-bar-1"> High School Internships </li> </Link>

                    <Link className='link' to="/Essentials"> <button className="button-1"> <li> Essentials </li></button> </Link>
                    <Link className='link' to="/about"> <button className="button-2"> <li> About </li></button> </Link>
                </ul>
            </div>
        );
    }
}
 
export default NavBar;