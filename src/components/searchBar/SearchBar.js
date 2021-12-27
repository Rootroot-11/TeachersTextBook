import React from 'react';

export default function SearchBar({term, data, update}) {
    const dataSearch = (e) => {
        const value = e.target.value.toLowerCase();

        const filter = data.filter(user => {
            return user.name.toLowerCase().includes(value);
        });

        update({
            data: filter,
            active: 0,
            term: value
        });

    }
        return (
            <div>
                <input value={term} type="search"
                    className="form-control"
                    placeholder="Enter Student Name, Parent or ID ere" onChange={dataSearch}
                       onChange={(event) => {console.log(event.target.value)}}
                />

            </div>
        );
    }
