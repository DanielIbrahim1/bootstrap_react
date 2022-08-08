import React from 'react'
import { Outlet } from "react-router-dom";
const Right = () => {
    return (
        <div className="col-sm-9">
            <h2>Dog Food</h2>
            <div>
            <Outlet /></div>
            <h2>Description</h2>
            <p>Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br /><br />
        </div>
    )
}

export default Right