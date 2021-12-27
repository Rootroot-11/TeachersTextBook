const getUsers = (page, limit) => {
    return fetch(`https://test-task-j.herokuapp.com/data?page=${page}&size=${limit}`)
        .then(value => value.json())
}

const getUsersByID = (id) => {
    return fetch('https://test-task-j.herokuapp.com/data?page=1&size=2' + '/' + 'id')
}

export {getUsers};
