import Users from "./components/users/Users";
import './App.css';
import Header from "./components/headers/header/Header";
import Header_second from "./components/headers/header-second/Header_second";
import Header_third from "./components/headers/header-third/Header_third";
import UserDetails from "./components/userDetails/UserDetails";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <div className="header_container">
                    <Header/>
                </div>

                <Header_second/>
                <Header_third/>
                <section>
                    <div>
                        <Route exact path={'/users/:id'} element={<UserDetails/>}/>
                    </div>
                    <div className="wrap">
                        <Users/>
                    </div>
                </section>
            </div>
        </Router>
    );
}
