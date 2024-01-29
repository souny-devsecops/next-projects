import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../lib/store";

type StateProp = {
    counter1: number
}

const initialValue: StateProp = {
    counter1: 0
}

const appSlice = createSlice({
    name: "app",
    initialState: initialValue,
    reducers: {
        add: (state) => {
            state.counter1++;
        },
        remove: (state) => {
            state.counter1--;
        }
    }
})

export const appSelector = (state: RootState) => state.appReducer;
export const { add, remove } = appSlice.actions
export default appSlice.reducer;