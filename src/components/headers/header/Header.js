import {Avatar} from "../../../common/Avatar";
import './Header.css';
import React from "react";

const Header = () => {
    return (
        <header className="header_top d-flex">
            <div className="school d-flex align-center header_top_grid">
                SCHOOL 1
                <i className="icon"/>
            </div>
            <div className="header_top_menu d-flex align-center">
                <div><a href="#">ANALITYCS</a></div>
                <div><a href="#">GRADEBOOKS</a></div>
                <div><a href="#">TESTS</a></div>
                <div className="buttStudents"><a href="#" style={{color:'#FFFFFF'}}>STUDENTS</a></div>
                <div><a href="#">TEACHERS</a></div>
                <div><a href="#">ARCHIVE</a></div>
            </div>

            <div className="avatar">
                <Avatar>
                    <img src="https://i.work.ua/sent_photo/9/e/6/9e6e3aa137130fd5d4ff228706e4b7ab.jpg" alt="avatar"/>
                </Avatar>
            </div>
        </header>
    );
};

export default Header;
