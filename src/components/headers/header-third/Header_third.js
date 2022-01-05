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
                {/*<img className="iconCSV"*/}
                {/*     src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-svg-icon-png-image_956571.jpg"*/}
                {/*     alt="export_svg"/>*/}
                <p>EXPORT CSV</p>
            </div>
        </header>
    )
}

export {Header_third};
