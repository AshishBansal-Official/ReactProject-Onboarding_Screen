import { configureStore } from "@reduxjs/toolkit";
import selectedPageReducer from "../features/page/selectedPageSlice";

export default configureStore({
    reducer: {
        selectedPage: selectedPageReducer,
    },
});
