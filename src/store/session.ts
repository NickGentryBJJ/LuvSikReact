export const SET_SESSION = 'session/SET_SESSION';
export const REMOVE_SESSION = 'session/REMOVE_SESSION';
export const SET_USER = 'session/SET_USER';

// Define action creators with explicit types
export const setSession = (session: any): { type: typeof SET_SESSION, session: any } => ({
	type: SET_SESSION,
	session
});

export const removeSession = (): { type: typeof REMOVE_SESSION } => ({
	type: REMOVE_SESSION
});

export const setUser = (user: any): { type: typeof SET_USER, payload: any } => ({
	type: SET_USER,
	payload: user
});

// Define action types
export type SessionActionTypes =
	| ReturnType<typeof setSession>
	| ReturnType<typeof removeSession>
	| ReturnType<typeof setUser>;

// Define reducer
export interface SessionState {
	session: string | null;
	user: string | null;
	selectedUser?: string | undefined; // Ensure consistency in the type
}

// Define initial state
export const initialState: SessionState = {
	session: null,
	user: null,
	selectedUser: undefined
};

// Define reducer
const sessionReducer = (state: SessionState = initialState, action: SessionActionTypes): SessionState => {
	switch (action.type) {
        case SET_SESSION:
            return { ...state, session: action.session };
        case REMOVE_SESSION:
            return { ...state, session: null };
        case SET_USER:
            return { ...state, selectedUser: action.payload };  
        default:
            return state;
    }
};
export default sessionReducer;