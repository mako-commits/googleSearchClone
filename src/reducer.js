// initial state is what the data layer looks like at first
export const initialState = {
  term: null,
};

//used to dispatch an action and change/set the serch term
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

// the state is the state of the data layer and the action is whatever we are dispatching into the data layer(Context API)
const reducer = (state, action) => {
  console.log(action);

  // the reducers jobs is to listen to any action
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        // return the current state and change the term of of the data layer with whatever action term that is dispatched
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};

export default reducer;
