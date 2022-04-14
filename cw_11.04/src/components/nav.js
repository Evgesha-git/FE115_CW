import React from "react";
import {Link, Outlet} from "react-router-dom";
import './nav.css';
import {CardWidget} from "./card";

function Nav(){
    return (
        <React.Fragment>
            <header>
                <div><span>Logo</span></div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='catalog'>Catalog</Link>
                    <Link to='about'>About</Link>
                    <CardWidget/>
                </nav>
            </header>
            <Outlet/>
        </React.Fragment>
    )
}

export default Nav;