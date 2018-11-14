export var setUser = (user) => {
    return {
            type : 'CHANGE_USER',
            user
        };
}

export var delUser = () => {
    return {
            type : 'DELETE_USER'
        };
}