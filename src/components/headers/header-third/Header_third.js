import React from "react";
import './Header_third.css';

const Header_third = ({setValue}) => {
    return (
        <header className="header_third d-flex align-center">
            <h1><a href="#">STUDENTS</a></h1>
            <form className="searchForm">
                <input className="searcher" type="search" placeholder="Enter Student Name, Parent or ID here"
                       onChange={(event) => setValue(event.target.value)}/>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-search" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </form>
            <div className="divCSV">

            </div>
        </header>
    )
}

export {Header_third};
