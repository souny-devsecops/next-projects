import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"
import appReducer from "@/core/controllers/appSlice.controller";
export const store = configureStore({
    // State ຍ່ອຍໆ
    reducer: { appReducer }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();