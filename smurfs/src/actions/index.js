import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const REQUEST_PENDING = "REQUEST_PENDING";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";

export const getData = () => dispatch => {
  dispatch({
    type: REQUEST_PENDING
  });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({
        type: REQUEST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const addSmurf = smurf => dispatch => {
  dispatch({
    type: REQUEST_PENDING
  });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log(res);
      dispatch({
        type: REQUEST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
