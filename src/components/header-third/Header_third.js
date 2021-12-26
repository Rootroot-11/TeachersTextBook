import './Header_third.css';
import './IconCSV.css';

const Header_third = () => {
    return (
        <header className="header_third d-flex align-center">

            <h1 className="stud"><a href="#">STUDENTS</a></h1>

            <form action="search" className="searcher">
                <input className="searcher" type="search" placeholder="Enter Student Name, Parent or ID here"/>
            </form>
            <div className="divCSV">
                <img className="iconCSV"
                    src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-svg-icon-png-image_956571.jpg"
                    alt="export_svg"/>
                <p>EXPORT CSV</p>
            </div>
        </header>

    )
}

export default Header_third;
