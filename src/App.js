import Users from "./components/users/Users";
import './App.css';
import Header from "./components/header/Header";
import Header_second from "./components/header-second/Header_second";
import Header_third from "./components/header-third/Header_third";

export default function App() {
    return (
        <div>
            <div className="header_container">
                <Header/>
            </div>
            <Header_second/>
            <Header_third/>

            <section>
                <div className="wrap">
                    <Users/>

                </div>
            </section>
        </div>
    );
}
