import { createStore, applyMiddleware, compose, Store, Middleware } from 'redux';
import { thunk, ThunkDispatch, ThunkMiddleware } from 'redux-thunk';
import sessionReducer, { SessionState, SessionActionTypes } from './session';
import usersReducer, { UsersState, UserActionTypes } from './users';
import rootReducer from './reducers';

// Define the root state type by combining all individual state types
export interface RootState {
    session: SessionState;
    users: UsersState;
}

// Define the initial state
const sessionInitialState = sessionReducer(undefined, {} as SessionActionTypes);
const usersInitialState = usersReducer(undefined, {} as UserActionTypes);

// Merge the initial states
const initialState: Partial<RootState> = {
    session: sessionInitialState,
    users: usersInitialState
};

// Define the root action type as a union of session and users action types
type RootAction = SessionActionTypes | UserActionTypes;

// Define the root dispatch type
export type AppDispatch = ThunkDispatch<RootState, void, RootAction>;

const configureStore = (preloadedState?: RootState): Store<RootState, RootAction> => {
    let enhancer;

    if (process.env.NODE_ENV === 'production') {
        enhancer = applyMiddleware(thunk as unknown as ThunkMiddleware<RootState, RootAction>);
    } else {
        const logger = require('redux-logger').default;
        const composeEnhancers =
            (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        enhancer = composeEnhancers(applyMiddleware(thunk as unknown as ThunkMiddleware<RootState, RootAction>, logger as Middleware<{}, RootState>));
    }
    return createStore(rootReducer, preloadedState || initialState, enhancer);
};
export default configureStore;