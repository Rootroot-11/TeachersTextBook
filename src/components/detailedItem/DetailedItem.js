import React from 'react';
import './detailedItem.css';

const DetailedItem = ({userDetailsData, filtredUsers}) => {

//     const TestsLabel = userDetailsData.data && userDetailsData.data.tests ? userDetailsData.data.tests.label : null;
// const AverageSpeed = userDetailsData.data && userDetailsData.data.tests ? userDetailsData.data.tests.speed : null
// let keys = Object.keys(filtredUsers.tests);

    const tst = filtredUsers.map(filtredUser => filtredUser.tests.map(value => value.speed))
    console.log(tst);

    return (
        <div>
            <div>STUDENT: <b>{userDetailsData.name}</b></div>
            <div>ID: <b>{userDetailsData.id}</b></div>
        </div>
    )
}

export default DetailedItem;
