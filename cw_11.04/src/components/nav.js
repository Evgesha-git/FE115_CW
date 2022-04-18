import React from "react";
import {Link, Outlet} from "react-router-dom";
import './nav.css';
import {CardWidget} from "./card";
import FindData from "./find/find";

function Nav(){
    return (
        <React.Fragment>
            <header>
                <Link to='/'><span>Logo</span></Link>
                <FindData/>
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