import { POST_ITEMS_SUCCESS } from "./actionType";

const listStates = {
  productData: [],
};

function reducer(state = listStates, { type, payload }) {
  switch (type) {
    case POST_ITEMS_SUCCESS:
      return { ...state};
    
    default:
      return state;
  }
}

export default reducer;