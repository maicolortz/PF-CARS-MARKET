import { createSlice } from "@reduxjs/toolkit";
const initialState = [{
    id: 1,
    title: 'car1',
    description: 'car 1 descri[ption]',
    completed: false
},
{
    id: 2,
    title: 'car2',
    description: 'car 2 description',
    completed: false
},
{
    id: 3,
    title: 'car3',
    description: 'car 3 description',
    completed: false
}
]
export const carSlice = createSlice({
    name: 'cars',
   initialState,
    reducers: {
        addCar: (state, action) => {
            console.log(state,action)
            state.push(action.payload)
        },
        deleteCar:(state,action)=>{
            const CarFound=state.find(Car=>Car.id===action.payload)
            console.log(CarFound)
            if(CarFound){
                state.splice(state.indexOf(CarFound),1)
            }
        },
        editCar:(state,action)=>{
            const{id,title,description}=action.payload
            const foundCar=state.find(Car=>Car.id==id)
            if (foundCar) {
                foundCar.title=title
                foundCar.description=description
            }
        }
    }
})
export const {addCar,deleteCar,editCar}=carSlice.actions
export default carSlice.reducer;