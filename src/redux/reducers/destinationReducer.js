let destinationReducer = (destination = {}, action) => {
    switch(action.type) {
        case 'UPDATE_DESTINATION':
            return Object.assign({}, destination, {
                city: action.term
            });


        default:
            return destination;
    }
}

export default destinationReducer;
