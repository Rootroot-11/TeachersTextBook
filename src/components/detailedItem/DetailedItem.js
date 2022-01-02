import React from 'react';
import './detailedItem.css';

const DetailedItem = ({userDetailsData}) => {

//     const TestsLabel = userDetailsData.data && userDetailsData.data.tests ? userDetailsData.data.tests.label : null;
// const AverageSpeed = userDetailsData.data && userDetailsData.data.tests ? userDetailsData.data.tests.speed : null

    return (

        <div className="userDetails">
            <div>STUDENT: <b>{userDetailsData.name}</b></div>
            <div>ID: <b>{userDetailsData.id}</b></div>

            {/*<div>Test Label: <b>{userDetailsData.tests.label}</b></div>*/}
            {/*<div>Speed: <b>{AverageSpeed}</b></div>*/}
        </div>
    )
}

export default DetailedItem;
