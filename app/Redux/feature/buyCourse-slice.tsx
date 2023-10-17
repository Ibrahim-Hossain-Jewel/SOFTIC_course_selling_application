import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type initialState = {
    value: buyCourse;
}
/*Type defination for buy course*/
type buyCourse = {
    courseName: string,
    courseprice: number,
    courseid: number,
    courserating: number
}
const initialState = {
    value: {
        courseName: '',
        courseprice: 0,
        courseid: 0,
        courserating: 0
    } as buyCourse,
} as initialState;
//creating slice for best selling course to buy from that.
export const course = createSlice({
    name: "BuyCourse",
    initialState,
    reducers: {
        //Now i need to use 
        buy: (state, action: PayloadAction<string>)=>{
            return{
                value: {
                    courseName: action.payload,
                    courseprice: 57,
                    courseid: 10,
                    courserating: 3
                }
            }
        },
        // add more reducer as you need.
    }
});
export const {buy} = course.actions;
export default course.reducer;