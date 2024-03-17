export const RECEIVE_USER = 'users/RECEIVE_USER';
export const RECEIVE_USERS = 'users/RECEIVE_USERS';

interface ReceiveUserAction {
  type: typeof RECEIVE_USER;
  user: User;
}

interface ReceiveUsersAction {
  type: typeof RECEIVE_USERS;
  users: UsersState;
}

export const receiveUser = (user: User): ReceiveUserAction => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = (users: UsersState): ReceiveUsersAction => ({
  type: RECEIVE_USERS,
  users
});

export type UserActionTypes = ReceiveUserAction | ReceiveUsersAction;

export const getUsers = (state: { users: UsersState }): User[] => {
  return state.users ? Object.values(state.users) : [];
};

export const getUser = (userId: string) => (state: { users: UsersState }): User | null => {
    return state.users ? state.users[userId] : null;
};

// Define initial state
export interface User {
    id: number;
    // Define other properties of the user object
}

export interface UsersState {
    [userId: string]: User;
}

// Define initial state
export const initialState: UsersState = {};

// Define reducer
const usersReducer = (state: UsersState = initialState, action: UserActionTypes): UsersState => {
    switch (action.type) {
        case RECEIVE_USER:
            return { ...state, [action.user.id]: action.user };
        case RECEIVE_USERS:
            return action.users;
        default:
            return state;
    }
};

export default usersReducer;