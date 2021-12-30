import './User.css';
import {Link} from "react-router-dom";

export default function User({users, sortData}) {
    return (

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
            <tbody>
            {/*< Link to={{pathname: '/users/:item.id'}}>*/}
            {users.map((item) => (
                <tr key={item.id} className="oneUser">
                    <td>
                        <form action=""><input type="checkbox"/></form>
                    </td>
                    <td> {item.name}</td>
                    <td>{item.id} </td>
                    <td>{item.class}</td>
                    <td>{item.score}</td>
                    <td>{item.speed}</td>
                    <td>{item.parents}</td>
                </tr>))}
            {/*</Link>*/}
            </tbody>
        </table>
    );
}
