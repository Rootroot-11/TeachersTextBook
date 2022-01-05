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
                    }}>ID
                    </th>
                    <th className="thClass" onClick={() => {
                        sortData('class')
                    }}>Class
                    </th>
                    <th className="thScore" onClick={() => {
                        sortData('score')
                    }}>Av. Score, %
                    </th>
                    <th className="thSpeed" onClick={() => {
                        sortData('speed')
                    }}>Av. Speed
                    </th>
                    <th className="thParents" onClick={() => {
                        sortData('parents')
                    }}>Parents
                    </th>
                </tr>
                </thead>
                <tbody className="tableBody">
                {filteredUsers.map((item) => (
                    <tr key={item.id}
                        className="oneUser"
                        onClick={() => detailRow(item)}>
                        <td>
                            <form action=""><input type="checkbox" onClick={() => {
                                if (toggle === 'hide') {
                                    setToggle('show')
                                } else if (toggle === 'show') {
                                    setToggle('hide')
                                }
                            }}/></form>
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
