import Users from "./components/users/Users";
import './App.css';
import Header from "./components/header/Header";

export default function App() {
    return (
        <div>
            <div className="header_container">
                <Header/>
            </div>
            <div className="wrap">
                <Users/>

            </div>
        </div>
    );
}
