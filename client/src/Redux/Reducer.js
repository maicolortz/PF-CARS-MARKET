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
          car: action.payload
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
          carDetail:action.payload,
        };
      case "GET_CAR_FOR_NAME":
        let car=[];
        car=action.payload==null?car:action.payload
        return {
          ...state,
          car: car
        };
       
      case "ORDER_FOR_PRICE":
        let /* ordenWeight=state.car
             let index=ordenWeight.findIndex(e=>e.id===232)
             ordenWeight[index].weight.imperial='18'
             state.car=ordenWeight; */
          ordenPrice =
            action.payload == "min"
              ? state.car.sort((a, b) =>
                  a.weight.metric.localeCompare(b.price, undefined, {
                    numeric: true,
                  })
                )
              : state.car.sort((a, b) =>
                  b.weight.metric.localeCompare(a.price, undefined, {
                    numeric: true,
                  })
                );
        return {
          ...state,
          car: ordenPrice,
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