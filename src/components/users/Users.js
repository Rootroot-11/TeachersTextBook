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
        getUsers(page, 4).then(value => {
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

            {
                users.map((value, index) => <User key={index} item={value}/>)
            }
            <button disabled={page <= 1} onClick={() => paginationHandler(-1)}>prev</button>
            {page}
            <button disabled={page >= totalPages} onClick={() => paginationHandler(1)}>next</button>
        </div>
    );
}
