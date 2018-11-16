var defaultState = {
    username: '',
    apiToken: '',
    firstName: '',
    lastName: '',
    isAuthenticated : false
}


const user = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_USER':
            if(action.user.username.length > 0)
                return {
                    ...state,
                    username: action.user.username,
                    isAuthenticated: true
                };
            return state;
        case 'DELETE_USER':
            return {
                ...defaultState,
                username : state.username                
            };
        default:
            return state;
    }
}


export default user;