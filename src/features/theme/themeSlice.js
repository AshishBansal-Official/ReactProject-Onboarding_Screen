import { createSlice } from "@reduxjs/toolkit";

export const myThemeSlice = createSlice({
    name: "myTheme",
    initialState: {
        selectedThemeIndex: 0,
    },
    reducers: {
        setselectedThemeIndex: (state, action) => {
            state.selectedThemeIndex = action.payload.selectedThemeIndex;
        },
    },
});

export const { setselectedThemeIndex } = myThemeSlice.actions;

export default myThemeSlice.reducer;
