import { createSlice } from "@reduxjs/toolkit";


const globalSlice = createSlice({
    name: 'global',
    initialState: {
        showSideBar: true
    },
    reducers: {
        changeSideBar: (state) => {
            state.showSideBar = !state.showSideBar;
        },
        clodeSideBar: (state) => {
            state.showSideBar = false;
        }
    }
});

export const {changeSideBar, clodeSideBar} = globalSlice.actions;

export default globalSlice.reducer;