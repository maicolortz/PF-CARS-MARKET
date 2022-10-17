import axios from "axios";

export function getCars() {
  return async function (dispatch) {
    dispatch({ type: "LOADING" })
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
      const { data } = await axios.get(`http://localhost:3001/cars/search/?name=${name}`);
      return dispatch({
        type: "GET_CAR_FOR_NAME",
        payload: data,
      });
    } catch (error) {
      console.error(error.response.data);
    }
  };
}
export function getCarForCondition(condition) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/cars/condition/?condition=${condition}`);
      return dispatch({
        type: "GET_CAR_FOR_CONDITION",
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
      dispatch({ type: "LOADING" })
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
  return async function (dispatch) {
    const { data } = await axios.get(`/cars/sortprice?modo=${payload}`);
    return dispatch({
      type: "ORDER_FOR_PRICE",
      payload: data,
      
    });
  };
}
export function OrderForName(payload) {
  return {
    type: "ORDER_FOR_NAME",
    payload,
  };
}

export function filterForModel(min) {
  return async function (dispatch) {
    const { data } = await axios.get(`http://localhost:3001/cars/range?min=${min[0]}&max=${min[1]}`);
    return dispatch({
      type: "FILTER_FOR_MODEL",
      payload: data,
    });
  };
}
export function filterForBrand(brand) {
  return async function (dispatch) {
    const { data } = await axios.get(`http://localhost:3001/cars/brand/?name=${brand}`);
    return dispatch({
      type: "FILTER_FOR_BRAND",
      payload: data,
    });
  };
}
