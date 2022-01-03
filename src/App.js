import Users from "./components/users/Users";
import './App.css';
import Header from "./components/headers/header/Header";
import Header_second from "./components/headers/header-second/Header_second";

export default function App() {
    return (
            <div>
                <div className="header_container">
                    <Header/>
                </div>

                <Header_second/>
                <section>
                    <div className="wrap">
                        <Users/>
                    </div>
                </section>
            </div>
    );
}
