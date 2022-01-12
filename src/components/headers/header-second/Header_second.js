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
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#C0C0C0" className="bi bi-x"
                     viewBox="0 0 16 16">
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            <div><a className="menu_item" href="#">CLEAR ALL</a></div>
        </header>
    );
};

export default Header_second;
