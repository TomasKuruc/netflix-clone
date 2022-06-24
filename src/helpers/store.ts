import {applyMiddleware, createStore, compose} from "redux";
import reducers from "./reducers";
import {loadState, saveState} from "./state";
import thunk, {ThunkAction} from "redux-thunk";
const persistedState = loadState();

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState(store.getState());
});

type MyThunkResult<R> = ThunkAction<R, any, any, any>;
export type AppDispatch = typeof store.dispatch | MyThunkResult<Promise<any>>;

export default store;