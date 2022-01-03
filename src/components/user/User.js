import './User.css';
import DetailedItem from "../detailedItem/DetailedItem";
import {useState} from "react";

export default function User({sortData, detailRow, filteredUsers, rowItem}) {

    const [toggle, setToggle] = useState('hide');
    return (
        <div>
        <table className="box_with_users">
            <thead>
            <tr className="headerOfTable">
                <th onClick={() => {
                    sortData('name')
                }}>Name
                </th>
                <th onClick={() => {
                    sortData('id')
                }}>ID
                </th>
                <th onClick={() => {
                    sortData('class')
                }}>Class
                </th>
                <th onClick={() => {
                    sortData('score')
                }}>Av. Score, %
                </th>
                <th onClick={() => {
                    sortData('speed')
                }}>Av. Speed
                </th>
                <th onClick={() => {
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
                        <form action=""><input type="checkbox" onClick={()=> {
                            if (toggle === 'hide'){
                                setToggle('show')
                            } else  if (toggle === 'show'){
                                setToggle('hide')}}}/></form>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.id} </td>
                    <td>{item.class}</td>
                    <td>{item.score}</td>
                    <td>{item.speed}</td>
                    <td>{item.parents}</td>
                </tr>))}
            <div className={toggle}>
                {<DetailedItem userDetailsData={rowItem} filtredUsers={filteredUsers}/>}
            </div>
            </tbody>
        </table>
        </div>
    );
}

