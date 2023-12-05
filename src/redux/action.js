import axios from "axios"
import { POST_ITEMS_SUCCESS } from "./actionType";

const url = "https://nomadicroots.apponward.com/v1/api/user/satvikgyan/registration";

export const PostItemsData = (el) => async (dispatch) => {
    console.log(el)
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
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(el),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            }).then(data => console.log(data))
            .then(data => dispatch({ type: POST_ITEMS_SUCCESS }))
            .catch(error => console.error('Error:', error));
    }
    catch (error) {
        console.log("Some error in ppos")
    }
}