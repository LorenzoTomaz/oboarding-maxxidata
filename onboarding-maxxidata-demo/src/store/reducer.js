
const initialState = {
    members: [],
    typeMembers: [],
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_MEMBERS') {
        return {
            ...state,
            members: state.members.concat(action.data)
        }
    }
    if (action.type === 'ADD_TYPE_MEMBERS') {
        return {
            ...state,
            typeMembers: state.typeMembers.concat(action.data)
        }
    }
    if (action.type === 'NEW_MEMBERS') {
        return {
            ...state,
            members: action.data
        }
    }
    if (action.type === 'NEW_TYPE_MEMBERS') {
        return {
            ...state,
            typeMembers: action.data
        }
    }
    return state;
}

export default reducer;