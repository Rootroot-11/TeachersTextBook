import React from "react";
import './Header_third.css';

const Header_third = ({setValue}) => {
    return (
        <header className="header_third d-flex align-center">
            <h1><a href="#">STUDENTS</a></h1>
            <form>
                <input className="searcher" type="search" placeholder="Enter Student Name, Parent or ID here"
                       onChange={(event) => setValue(event.target.value)}/>
            </form>
            <div className="divCSV">

            </div>
        </header>
    )
}

export {Header_third};
