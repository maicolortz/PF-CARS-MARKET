const initialState = {
    car: [],
    user: [],
    allCars: [],
    allUsers:[],
    carDetail: [],
    loading: false,
    transactions:[],
    payment_link:[],
  };
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_CARS":
        return {
          ...state,
          allCars: action.payload,
          car: action.payload,
          loading: false,
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
          loading: false,
        };
      case "GET_CAR_FOR_NAME":
        return {
          ...state,
          car: action.payload,
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
      case "FILTER_FOR_MODEL":
        console.log(action.payload)
        return {
          ...state,
          car:filtrarcars(action.payload,state.car),
        };
        case "FILTER_FOR_BRAND":
        return {
          ...state,
          car:filtrarcars(action.payload,state.car),
        };
      case "LOADING":
        return {
          ...state,
          loading: true,
        }
        case "GET_TRANSACTIONS":
          return{
            ...state,
            transactions:action.payload
          }
        case "GET_PAYMENT_LINK":
          return{
            ...state,
            payment_link:action.payload
          }
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
    if(carros.length==0){
      return ["none"];
    }
    return carros; 
  }