import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.api";
import User from "../user/User";
import "./Users.css";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);

    const sortData = (field) => {
        console.log(field);

        const copyData = users.concat();
        const sortData = copyData.sort(
            (a, b) => {
                return a[field] > b[field] ? 1 : -1
            })
        setUsers(sortData)
    }

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

    // const human = users.filter(user => user.id === 123890);
    //
    // console.log(human);
    return (
        <div>
            <div>
                <form className="searh_form">
                    <input type="text"
                           placeholder="Search names and ID"
                           className="search_input"
                           onChange={(event) => console.log(event.target.value)}/>
                </form>
            </div>
            {
                <User users={users} sortData={sortData}/>
            }
            <div className="button">
                <button disabled={page <= 1} onClick={() => paginationHandler(-1)}>prev</button>
                {page}
                <button disabled={page >= totalPages} onClick={() => paginationHandler(1)}>next</button>
            </div>
        </div>
    );
}
