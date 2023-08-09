import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../reactForms.css";


const Navbar = () => {

    return (
        <div>
            <div style={{
                display: 'flex', justifyContent: 'space-between', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0px 2px, rgba(0, 0, 0, 0.22) 2px 0px 0px',
                color: '#fff'
            }}>
                <ul style={{
                    listStyle: 'none', display: 'flex',
                    columnGap: 20, margin: 16, paddingLeft: 0,
                    fontSize: 14
                }}>
                    <li className="navItem"><Link to='/home' style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li className="navItem"><Link to='/personaldetails' style={{ textDecoration: 'none' }}>Personal Details</Link></li>
                    <li className="navItem"><Link to='/details' style={{ textDecoration: 'none' }}>Details</Link></li>
                    <li className="navItem"><Link to='/about' style={{ textDecoration: 'none' }}>About</Link></li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar;