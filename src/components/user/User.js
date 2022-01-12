import './User.css';
import DetailedItem from "../detailedItem/DetailedItem";
import {useState} from "react";

export default function User({sortData, detailRow, filteredUsers, rowItem, user}) {
    const [toggle, setToggle] = useState('hide');
    return (
        <div>
            <table className="box_with_users">
                <thead>
                <tr className="headerOfTable">
                    <th>
                        <form action=""><input type="checkbox"/></form>
                    </th>
                    <th onClick={() => {
                        sortData('name')
                    }}>Name
                    </th>
                    <th className="thId" onClick={() => {
                        sortData('id')
                    }}>ID <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                               className="bi bi-chevron-expand" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
                    </svg>
                    </th>
                    <th className="thClass" onClick={() => {
                        sortData('class')
                    }}>Class
                    </th>
                    <th className="thScore" onClick={() => {
                        sortData('score')
                    }}>Av. Score, %
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-chevron-expand" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
                    </svg>
                    </th>
                    <th className="thSpeed" onClick={() => {
                        sortData('speed')
                    }}>Av. Speed
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-chevron-expand" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
                        </svg>
                    </th>
                    <th className="thParents" onClick={() => {
                        sortData('parents')
                    }}>Parents
                    </th>
                </tr>
                </thead>
                <tbody className="tableBody" onClick={() => {
                    if (toggle === 'hide') {
                        setToggle('show')
                    } else if (toggle === 'show') {
                        setToggle('hide')
                    }}}>
                {filteredUsers.map((item) => (
                    <tr key={item.id}
                        className="oneUser"
                        onClick={() => detailRow(item)}>
                        <td>
                            <form><input type="checkbox"/></form>
                        </td>
                        <td className="userName">{item.name}</td>
                        <tr className="anotherDetails">
                        <td>{item.id} </td>
                        <td>{item.class}</td>
                        <td>{item.score}</td>
                        <td>{item.speed}</td>
                        <td>{item.parents}</td>
                        </tr>
                    </tr>))}
                <div className={toggle}>
                    {<DetailedItem userDetailsData={rowItem} filtredUsers={filteredUsers} user={user}/>}
                </div>
                </tbody>
            </table>
        </div>
    );
}
