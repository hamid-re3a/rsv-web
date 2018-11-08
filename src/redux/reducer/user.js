var defaultState = {
    username: '',
    apiToken: '',
    firstName: '',
    lastName: '',
}


const user = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_USER':
            return {
                ...state,
                username: action.user.username
            };
        case 'DELETE_USER':
            return defaultState;
        default:
            return state;
    }
}


export default user;