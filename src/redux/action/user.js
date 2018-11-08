export var login = (user) => {
    return {
            type : 'CHANGE_USER',
            user
        };
}

export var logout = () => {
    return {
            type : 'DELETE_USER'
        };
}