import './Header_second.css';
import React from "react";

const Header_second = () => {
    return (
        <header className="header_second d-flex align-center">
            <div><a className="menu_item" href="#">SHOW ALL</a></div>
            <i className="arrow down"/>
            <div><a className="menu_item" href="#">ALL GRADES</a></div>
            <i className="arrow down"/>
            <div><a className="menu_item" href="#">ALL CLASSES</a></div>
            <i className="arrow down"/>
            <div><a className="menu_item" href="#">AV.SCORE</a></div>
            <i className="arrow down"/>
            <div><a className="menu_item" href="#">AV.SPEED</a></div>
            <i className="arrow down"/>
            <div><a className="menu_item" href="#">ALL CLASSES</a></div>
            <i className="arrow down"/>
            <div><a className="menu_item" href="#">CLEAR ALL</a></div>
            <i className="arrow down"/>
        </header>
    );
};

export default Header_second;
