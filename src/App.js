import Users from "./components/users/Users";
import './App.css';
import Header from "./components/headers/header/Header";
import Header_second from "./components/headers/header-second/Header_second";
import {ArchivedUsers} from "./components/archivedUsers/ArchivedUsers";

export default function App() {
    return (
        <div className="fullContainer">
            <Header/>
            <Header_second/>
            <div className="wrap">
                <Users/>
            </div>
            <ArchivedUsers/>
        </div>
    );
}
