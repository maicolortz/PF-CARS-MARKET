import axios from "axios";

export function getCars() {
  return async function (dispatch) {

    let json = await axios.get("http://localhost:3001/cars");
    return dispatch({
      type: "GET_CARS",
      payload: json.data,
    });
  };
}
export function getCarForName(name) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/cars?name=${name}`);
      return dispatch({
        type: "GET_CAR_FOR_NAME",
        payload: data,
      });
    } catch (error) {
      console.error(error.response.data);
    }
  };
}


export function getUsers() {
  return async function (dispatch) {
    const { data } = await axios.get("/users");
    return dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };
}
export function getUser(id) {
    return async function (dispatch) {
      const { data } = await axios.get(`/users/${id}`);
      return dispatch({
        type: "GET_USER",
        payload: data,
      });
    };
  }
export function getCardDetail(id) {
  return async function (dispatch) {
    const { data } = await axios.get(`http://localhost:3001/cars/${id}`);
    return dispatch({
      type: "GET_CAR_DETAIL",
      payload: data,
    });
  };
}

export function postCar(data) {
  return async function(dispatch){
    try {
      const carCreado = await axios.post("http://localhost:3001/cars", data)
      return dispatch({type: "POST_CAR", payload: carCreado.data})
    } catch (error) {
      console.log(error)
    }
  }
}

export function postUser(user) {
    return async function () {
      const d = await axios.post("/cars", user);
      return d;
    };
  }
export function OrderForPrice(payload) {
  return {
    type: "ORDER_FOR_PRICE",
    payload,
  };
}
export function OrderForName(payload) {
  return {
    type: "ORDER_FOR_NAME",
    payload,
  };
}

export function filterForModel(model) {
  return async function (dispatch) {
    const { data } = await axios.get(`/cars/?model=${model}`);
    return dispatch({
      type: "FILTER_FOR_MODEL",
      payload: data,
    });
  };
}
