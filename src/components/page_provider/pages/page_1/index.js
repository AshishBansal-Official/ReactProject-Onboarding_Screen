import React from "react";
import { Wrapper } from "./styles/page_1";
import { Label } from "../components/Label";
import { FormField } from "../components/FormField";
import { FilledButton } from "../components/FilledButton";
import Header from "../components/header";
import { useDispatch } from "react-redux";
import { incrementPage } from "../../../../features/page/selectedPageSlice";

const PageOne = () => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Header
                title="Welcome! First things first..."
                subtitle={"You can always change them later."}
            ></Header>
            <form>
                <Label>Full Name</Label>
                <FormField placeholder="Name"></FormField>
                <div style={{ height: "10px" }}></div>
                <Label>Display Name</Label>
                <FormField placeholder="Display Name"></FormField>
                <FilledButton onClick={() => dispatch(incrementPage())}>
                    Create Workspace
                </FilledButton>
            </form>
        </Wrapper>
    );
};

export default PageOne;
