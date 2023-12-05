import { POST_ITEMS_SUCCESS } from "./actionType";

const url =
  "https://nomadicroots.apponward.com/v1/api/user/satvikgyan/registration";

export const PostItemsData = (user) => async (dispatch) => {
  // try {
  //     const data = el;
  //     axios.post(url, data)
  //         .then(response => {
  //             dispatch({ type: POST_ITEMS_SUCCESS })
  //         })
  // } catch (err) {
  //     console.log("error data");
  // }
  // const url = 'https://example.com/endpoint';
  // const data = { key1: 'value1', key2: 'value2' };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
   
    dispatch({type: POST_ITEMS_SUCCESS,payload:res.status });
  } catch (error) {
    console.log("Some error in ppos");
  }
};
