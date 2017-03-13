import React from 'react';
import {render} from 'react-dom';
import App from '../components/App';
import configureStore from '../redux/configure-store';
import { Provider } from 'react-redux';
import "../../style/style.css";


let initialState = {

    travelDate: {
        startDate: '',
        endDate: ''
    },
    destination: {
        city: '...'
    },

    userData: {
        profileTitle: '',
        budget: 4,
        pace: 4,
        refinements: {
            liveMusic: false,
            familyFriendly: false,
            vegetarian: false,
            tours: false,
            cheapEats: false,
            foodie: false,
            romantic: false
        },
        nightlifeTypes: {
            barClubLounge: true,
            seeTheTown: true,
            eventsEntertainment: true,
            familyFriendlyOnly: false
        },
        profileSettings: {
            mustsee: { val: "3", message: 'Only the Best' },
            culture: { val: "4", message: 'When in Rome...' },
            cuisine: { val: "6", message: 'Important to Me' },
            adventure: { val: "2", message: 'Safety First' },
            art: { val: "4", message: "Art's Pretty Cool" },
            entertainment: { val: "4", message: "I'm into Fun" },
            hist: { val: "5", message: "History's Cool"},
            museums: { val: "4", message: 'Enjoy Museums' },
            nature: { val: "7", message: 'Need Fresh Air' },
            rr: { val: "3", message: 'Limited Interest' },
            shopping: { val: "4", message: 'Like Shopping' },
            sports: { val: "5", message: 'Like Sports' }
        }
    }
}

let store = configureStore(initialState);

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)
