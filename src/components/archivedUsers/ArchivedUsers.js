import React from "react";
import './ArchivedUsers.css'
import '../user/User.css';

const ArchivedUsers = () => {
    return (
        <table className="archivedUsers">
           <thead><h1>ARCHIVED</h1></thead>
            <tbody className="archiveBody"><td>
            <form><input type="checkbox"/></form></td>
            <tr className="archivedDetails">
                <p className="userName">Arlene McKoy</p>
                <p>7512552212</p>
                <p>1D</p> <p>81%</p>  <p>Above Expected</p> <p>Antony Kidman, Janelle Ann Kidman</p>
            </tr>
            </tbody>
        </table>
    )
}

export {ArchivedUsers};
