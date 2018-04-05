import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav class="navbar">
        <ul class="nav">
            <li class="nav-item col-sm-4">
                <a href="/">Clicky Game</a>
            </li>
            <li class="nav-item col-sm-4">
                Click an image to begin!
            </li>
            <li class="nav-item col-sm-4">
                "Score: "
                "0"
                " | Top Score: "
                "0"
            </li>
        </ul>
    </nav>
);

export default NavBar;