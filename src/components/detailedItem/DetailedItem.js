import React from 'react';
import './DetailedItem.css';

const DetailedItem = ({userDetailsData, user}) => {

    const speed = user.map(filterUser => filterUser.tests.map(value => value.speed));
    const score = user.map(filterUser => filterUser.tests.map(value => value.score));
    const total = user.map(filterUser => filterUser.tests.map(value => value.total));
    const eSpeed = user.map(filtredUser => filtredUser.tests.map(value => value.expSpeed));
    const concept = user.map(filtredUser => filtredUser.tests.map(value => value.concept));

    return (
        <div>
            <table className="tableWithDetails">
                <thead>
                <tr className="head">
                    <td>STUDENT: <b>{userDetailsData.name}</b></td>
                    <td>ID: <b>{userDetailsData.id}</b></td>
                </tr>
                <tr className="trWithButtons">
                    <button className="buttons">ALL CONCEPTS <i className="arrow down"/></button>
                    <button className="buttons">ALL SCORE <i className="arrow down"/></button>
                    <button className="buttons">ALL SPEED <i className="arrow down"/></button>
                    <input type="date"/>
                </tr>
                <hr className="hr"/>
                </thead>
                <tbody>
                <tr className="head">
                    <td>SCORE</td>
                    <figure className="circleBlue"/>
                    <td>90%+ accuracy</td>
                    <figure className="circleGreen"/>
                    <td>80 - 89% accuracy</td>
                    <figure className="circleYellow"/>
                    <td>50 - 79% accuracy</td>
                    <figure className="circleRed"/>
                    <td>below 50% accuracy</td>
                </tr>
                <tr className="head">
                    <td>SPEED</td>
                    <figure className="circleBlue"/>
                    <td>above expected</td>
                    <figure className="circleGreen"/>
                    <td>as expected</td>
                    <figure className="circleRed"/>
                    <td>below expected</td>
                </tr>
                <tr className="head">
                    <td># Test Label</td>
                    <td>Score</td>
                    <td>Speed</td>
                    <td>Total Q-ns</td>
                    <td>Exp. Speed</td>
                    <td>Concept</td>
                    <td>Date</td>
                    <td>Absent</td>
                </tr>
                <tr>Score:<b>{score}</b></tr>
                <tr>Speed:<b>{speed}</b></tr>
                <tr>Total Q-ns: <b>{total}</b></tr>
                <tr>Exp. Speed: <b>{eSpeed}</b></tr>
                <tr>Concept: <b>{concept}</b></tr>
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </div>
    )
}

export default DetailedItem;
