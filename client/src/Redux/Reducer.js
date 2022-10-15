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
        return {
          ...state,
          car: filtrarcars(action.payload,state.car),
        };
        case "GET_CAR_FOR_CONDITION":
          return {
            ...state,
            car: filtrarcars(action.payload,state.car)
          };
      case "ORDER_FOR_PRICE":
        return {
          ...state,
          car: filtrarcars(action.payload,state.car),
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
  function filtrarcars(carsfiltered, carsactual){
    let car=carsactual
    let carprice=carsfiltered
    let carros=[]
    for (let i = 0; i < carprice.length; i++) {
      for (let j = 0; j < car.length; j++) {
          if (carprice[i].id==car[j].id) {
            carros.push(carprice[i])
          } 
      } 
    } 
    return carros; 
  }