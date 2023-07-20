import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const fileReducer = (path="", action) => {
    if (action.type === "FILE") {
        path = action.payload;
        return path;
    }
}



export const store = createStore(fileReducer, compose(applyMiddleware(thunk)));
