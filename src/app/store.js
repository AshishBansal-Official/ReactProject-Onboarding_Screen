import { configureStore } from "@reduxjs/toolkit";
import selectedPageReducer from "../features/page/selectedPageSlice";
import myThemeReducer from "../features/theme/themeSlice";

export default configureStore({
    reducer: {
        selectedPage: selectedPageReducer,
        myTheme: myThemeReducer,
    },
});
