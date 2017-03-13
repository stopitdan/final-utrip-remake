let actions = {
    updateBudget: function(val) {
        return {
            type: 'UPDATE_BUDGET',
            val: val
        }
    },

    updatePace: function(val) {
        return {
            type: 'UPDATE_PACE',
            val: val
        }
    },

    updateDestination: function(term) {
        return {
            type: 'UPDATE_DESTINATION',
            term: term
        }
    },

    toggleRefinements: function(name) {
        return {
            type: 'TOGGLE_REFINEMENTS',
            name: name
        }
    },

    toggleNightlifeTypes: function(name) {
        return {
            type: 'TOGGLE_NIGHTLIFE_TYPES',
            name: name
        }
    },

    profileSelected: function(title) {
        return {
            type: 'PROFILE_SELECTED',
            title: title
        }
    },

    updateProfileSettings: function(val, msg, name) {
        return {
            type: 'UPDATE_PROFILE_SETTINGS',
            val: val,
            msg: msg,
            name: name
        }
    },

    // PERFORM AN ACTION BASED ON STATE USING 'THUNK'
    createNewUserIdIfOdd: function() {
        return (dispatch, getState) => {
            const { user } = getState();
            if(user.id % 2 === 0) {
                return
            }
            dispatch(actions.createNewUserId());
        }
    },

    createNewUserIdAsync: function() {
        return (dispatch) => {
            setTimeout(() => {
                dispatch(actions.createNewUserId())
            }, 2500)
        }
    }
}
export default actions
