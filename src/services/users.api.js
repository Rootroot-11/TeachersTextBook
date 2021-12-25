const getUsers = (page, limit) => {
    return fetch(`https://test-task-j.herokuapp.com/data?page=${page}&size=${limit}`)
        .then(value => value.json())
}

export {getUsers};
