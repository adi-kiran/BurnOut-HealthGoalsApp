// action types
const UPDATE_STATE = "UPDATE_STATE";

// reducer
const burnoutReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_STATE:
      newState = { ...state, ...action.payload };
      break;
    default:
      newState = state;
  }
  return newState;
};

// action definition
export const updateState = (stateUpdates) => {
  return { type: UPDATE_STATE, payload: stateUpdates };
};

export default burnoutReducer;
