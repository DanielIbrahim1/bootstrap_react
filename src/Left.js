import React from 'react'
import {Link } from "react-router-dom";
import { getDogFood } from './Data';
const Left = () => {
    return (
        <div className="col-sm-3 sidenav">
            <h4>John's Blog</h4>
            <Link to="/">Home</Link><br/>
            <Link to="/dogfood">Dog Food</Link><br/>
            <a href="#section3">Family</a><br/>
            <a href="#section3">Photos</a><br/>
            <br />
            
        </div>
    )
}

export default Left

{/* <Link to="/invoices">Invoices</Link> |{" "} */}