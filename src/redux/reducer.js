import { POST_ITEMS_SUCCESS } from "./actionType";

const listStates = {
 
 status: "",
};

function reducer(state = listStates, { type, payload }) {
  switch (type) {
    case POST_ITEMS_SUCCESS:
      return {
        ...state,status:payload
       };

    default:
      return state;
  }
}

export default reducer;
