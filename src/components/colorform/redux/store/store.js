import {createStore, combineReducers} from 'redux'
import {colors, sort} from '../reducers/reducers';

const initialState = {
    colors: [
        {
            id: "3315e1p5-3abl-0p523-30e4-8001l8yf3036",
            title: "Rad Red",
            color: "#FF0000",
            rating: 3,
            timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
        },
        {
            id: "3315e1p5-3abl-0p523-30e4-8001l8yf4457",
            title: "Crazy Green",
            color: "#00FF00",
            rating: 0,
            timestamp: "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
        },
        {
            id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412",
            title: "Big Blue",
            color: "#0000FF",
            rating: 5,
            timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
        }
    ],
    sort: "SORTED_BY_TITLE"
};
const store = createStore(
    combineReducers({colors, sort}),
    initialState
);