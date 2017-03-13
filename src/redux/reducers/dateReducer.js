let dateReducer = (travelDate = {}, action) => {
    switch(action.type) {
        case 'UPDATE_DATE':
            return Object.assign({}, {
                startDate: action.start,
                endDate: action.end
            });

        default:
            return travelDate;
    }
}

export default dateReducer;
