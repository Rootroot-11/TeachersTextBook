import './User.css';
import {Link} from "react-router-dom";

export default function User({item}) {
    return (
        <table className="user">
            < Link to={{pathname: '/users/' + item.id}}>
                <tr className="oneUser">
                    < td>
                        <form action=""><input type="checkbox"/></form>
                    </td>
                    <td> {item.name}</td>
                    <td>{item.id} </td>
                    <td>{item.class}</td>
                    <td>{item.score}</td>
                    <td>{item.parents}</td>
                </tr>
            </Link>
        </table>
    );
}
