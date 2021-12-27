import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.api";
import User from "../user/User";
import "./Users.css";

export default function Users() {
    const [users, setUsers] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setUsers(null)
        getUsers(page, 6).then(value => {
            setUsers(value.data)
            setTotalPages(value.totalPages)
        })
    }, [page]);

    const paginationHandler = (num) => {
        setPage(page + num)
    }

    if (!users) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                </tr>
                <tr>
                    <th>ID</th>
                </tr>
                <tr>
                    <th>Class</th>
                </tr>
                <tr>
                    <th>Av. Score, %</th>
                </tr>
                <tr>
                    <th>Av. Speed</th>
                </tr>
                <tr>
                    <th>Parents</th>
                </tr>
                </thead>
            </table>
            <div className="box_with_users">
                <section>
                    {
                        users.map((value, index) => <User item={value} key={index}/>)

                    }
                </section>
                <div className="button">
                    <button disabled={page <= 1} onClick={() => paginationHandler(-1)}>prev</button>
                    {page}
                    <button disabled={page >= totalPages} onClick={() => paginationHandler(1)}>next</button>
                </div>
            </div>
        </div>
    );
}
