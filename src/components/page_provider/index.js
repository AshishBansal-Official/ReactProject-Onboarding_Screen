import React from "react";
import { useSelector } from "react-redux";
import { PageOne, PageTwo, PageThree, PageFour } from "./pages";

const PageProvider = () => {
    const selectedPage = useSelector((state) => state.selectedPage.value);
    return (
        <>
            {selectedPage === 1 && <PageOne></PageOne>}
            {selectedPage === 2 && <PageTwo></PageTwo>}
            {selectedPage === 3 && <PageThree></PageThree>}
            {selectedPage === 4 && <PageFour></PageFour>}
        </>
    );
};

export default PageProvider;
