import React, {useEffect, useState} from "react";
import {getUsers} from "../../services/users.api";
import User from "../user/User";
import {Footer} from "../footer/Footer";
import {Header_third} from "../headers/header-third/Header_third";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [directionSort, setDirectionSort] = useState(true);
    const [rowItem, setRowItem] = useState(true);
    const [user, setUser] = useState([]);

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
    });

    useEffect(() => {
        getUsers(page, 4).then(value => {
            setUsers(value.data)
            setTotalPages(value.totalPages)
        })
        getUsers(page, 5).then(value => {
            setUser(value.data)
        })
    }, [page]);

    const detailRow = (row) => {
        setRowItem(row)
    };

    const paginationHandler = (num) => {
        setPage(page + num)
    };

    return (
        <div>
            <Header_third
                setValue={setValue}/>

            <User sortData={sortData}
                  detailRow={detailRow}
                  filteredUsers={filteredUsers}
                  rowItem={rowItem}
                  user={user}/>

            <Footer
                totalPages={totalPages}
                page={page}
                paginationHandler={paginationHandler}/>
        </div>
    );
}
