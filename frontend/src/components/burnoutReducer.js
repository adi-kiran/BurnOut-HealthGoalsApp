// Define the reducer "action" types you want
const UPDATE_STATE = "UPDATE_STATE";

// reducer - usually we have specific cases (actions), where we further process data based on the action definition and update only specific states
// Currently, we only want to update the state as is, without any processing.
// We'll keep a switch case just for extensibility, in case we come up with some other cases(actions) in the future.
const appReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_STATE: // 
      newState = { ...state, ...action.payload };
      break;
    default: // default case, state remains the same
      newState = state;
  }
  return newState;
};

// define actions
export const updateState = (updatesToState) => {
  return { type: UPDATE_STATE, payload: updatesToState };
};

export default appReducer;
