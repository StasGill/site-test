import axios from "axios";
import {
  getNumber,
  setLoading,
  signUp,
  signIn,
  setError,
} from "../../redux/actions/actions";

const addNewNumberOperation = (number) => async (dispatch, getState) => {
  const idToken = getState().idToken;
  try {
    await axios.post(
      `https://socialprofile-96fb9-default-rtdb.firebaseio.com/numbers.json?auth=${idToken}`,
      number
    );
  } catch (error) {
    console.log(error);
  } finally {
  }
};

const deleteNumberOperation = (id) => (dispatch, getState) => {
  const idToken = getState().idToken;
  try {
    axios
      .delete(
        `https://socialprofile-96fb9-default-rtdb.firebaseio.com/numbers/${id}.json?auth=${idToken}`
      )
      .then(() => console.log(" "));
  } catch (error) {
    console.log(error);
  } finally {
  }
};

const getNumberOperation = () => async (dispatch, getState) => {
  const idToken = getState().idToken;

  try {
    const response = await axios.get(
      `https://socialprofile-96fb9-default-rtdb.firebaseio.com/numbers.json?auth=${idToken}`
    );
    const students = Object.keys(response.data).map((key) => ({
      ...response.data[key],
      id: key,
    }));

    dispatch(getNumber(students));
  } catch (error) {
    console.log(error);
  } finally {
  }
};

const signUpOperation = (user) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCv7tPM4v9YqO78FwXNcVo4QUvMK30a1F0",
      {
        ...user,
        returnSecureToken: true,
      }
    );
    dispatch(signUp(response.data));
    console.log(response.data);
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading());
  }
};

const signInOperation = (user) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCv7tPM4v9YqO78FwXNcVo4QUvMK30a1F0",
      {
        ...user,
        returnSecureToken: true,
      }
    );
    dispatch(signIn(response.data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading());
  }
};

export {
  addNewNumberOperation,
  getNumberOperation,
  deleteNumberOperation,
  signUpOperation,
  signInOperation,
};
