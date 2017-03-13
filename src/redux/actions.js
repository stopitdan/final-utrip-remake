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

    updateDate: function(start, end) {
        return {
            type: 'UPDATE_DATE',
            start: start,
            end: end
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


}
export default actions
