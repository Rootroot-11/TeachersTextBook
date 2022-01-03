import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.api";
import User from "../user/User";
import "./Users.css";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [directionSort, setDirectionSort] = useState(true);
    const [rowItem, setRowItem] = useState(true);

    const sortData = (field) => {
        setRowItem(field);

        const copyData = users.concat();
        let sortData;

        if (directionSort) {
            sortData = copyData.sort(
                (a, b) => {
                    return a[field] > b[field] ? 1 : -1
                }
            )
        }

        sortData = copyData.reverse(
            (a, b) => {
                return a[field] > b[field] ? 1 : -1
            }
        )
        setUsers(sortData)
        setDirectionSort(!directionSort);
    }
    const [value, setValue] = useState('');

    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(value.toLowerCase())
    })

    useEffect(() => {
        getUsers(page, 4).then(value => {
            setUsers(value.data)
            setTotalPages(value.totalPages)
        })
    }, [page]);

    const detailRow = (row) => {
        setRowItem(row)
    }

    const paginationHandler = (num) => {
        setPage(page + num)
    }

    if (!filteredUsers) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>
            <header className="header_third d-flex align-center">
                <h1 className="stud"><a href="#">STUDENTS</a></h1>
                <form className="searh_form">
                    <input className="searcher" type="search" placeholder="Enter Student Name, Parent or ID here"
                           onChange={(event) => setValue(event.target.value)}/>
                </form>
                <div className="divCSV">
                    {/*<img className="iconCSV"*/}
                    {/*     src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-svg-icon-png-image_956571.jpg"*/}
                    {/*     alt="export_svg"/>*/}
                    <p>EXPORT CSV</p>
                </div>
            </header>
            {
                <User users={users} sortData={sortData}
                      detailRow={detailRow}
                      filteredUsers={filteredUsers}
                      rowItem={rowItem}/>
            }
            <div className="button">
                <button disabled={page <= 1} onClick={() => paginationHandler(-1)}>prev</button>
                {page}
                <button disabled={page >= totalPages} onClick={() => paginationHandler(1)}>next</button>
            </div>
        </div>
    );
}
