import {Avatar} from "../../common/Avatar";
import './Header.css';

const Header = () => {
    return (
        <header className="header_top d-flex">
            <div className="school d-flex align-center header_top_grid">
                SCHOOL 1
            </div>
            <div className="header_top_menu d-flex align-center">
                <div className="nav_menu_item"><a href="#">ANALITYCS</a></div>
                <div className="nav_menu_item"><a href="#">GRADEBOOKS</a></div>
                <div className="nav_menu_item"><a href="#">TESTS</a></div>
                <div className="nav_menu_item"><a href="#">STUDENTS</a></div>
                <div className="nav_menu_item"><a href="#">TEACHERS</a></div>
                <div className="nav_menu_item"><a href="#">ARCHIVE</a></div>
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
