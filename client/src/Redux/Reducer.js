const initialState = {
    car: [],
    user: [],
    allCars: [],
    allUsers:[],
    carDetail: [],
  };
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_CARS":
        return {
          ...state,
          allCars: action.payload,
        };
      case "GET_USER":
        return {
          ...state,
          user: action.payload,
        };
        case "GET_USERS":
        return {
          ...state,
          allUsers: action.payload,
        };
      case "GET_CAR_DETAIL":
        return {
          ...state,
          cardDetail: action.payload,
        };
      case "GET_CAR_FOR_NAME":
        let car=[];
        car=action.payload==null?car:action.payload
        return {
          ...state,
          car: car
        };
       
      case "ORDER_FOR_PRICE":
       
        return {
          ...state,
          car: action.payload
        };
      case "ORDER_FOR_NAME":
        const ordeneds =
          action.payload == "asc"
            ? state.car.sort((a, b) => a.name.localeCompare(b.name))
            : state.car.sort((a, b) => b.name.localeCompare(a.name));
        return {
          ...state,
          car: ordeneds,
        };
      case "FILTER_FOR_MODEL":
        return {
          ...state,
          car:action.payload
        };
      default:
        return state;
    }
  };