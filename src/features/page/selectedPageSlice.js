import { createSlice } from "@reduxjs/toolkit";

export const selectedPageSlice = createSlice({
    name: "selectedPage",
    initialState: {
        value: 1,
    },
    reducers: {
        setPage: (state, action) => {
            state.value = action.payload;
        },
        incrementPage: (state) => {
            if (state.value < 4) state.value += 1;
        },
    },
});

export const { setPage, incrementPage } = selectedPageSlice.actions;

export default selectedPageSlice.reducer;
