

const fiche = (state = { number: 3 }, action) => {
    switch (action.type) {
        case 'CHANGE_FICHE_NUMBER':
            return {
                number: action.number
            };
        default:
            return state;
    }
}
export default fiche;