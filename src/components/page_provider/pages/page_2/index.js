import React from "react";
import Header from "../components/header";
import { Label } from "../components/Label";
import { FormField } from "../components/FormField";
import { FilledButton } from "../components/FilledButton";
import { useDispatch } from "react-redux";
import { incrementPage } from "../../../../features/page/selectedPageSlice";
import { Wrapper } from "./styles/page_2";

const PageTwo = () => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Header
                title={"Let's set up a home for all your work"}
                subtitle="You can always create another workspace letter"
            ></Header>
            <form
                style={{
                    margin: "4rem 0",
                }}
            >
                <Label>Workspace Name</Label>
                <FormField placeholder="Eden"></FormField>
                <div style={{ height: "10px" }}></div>
                <Label>
                    Workspace URL{" "}
                    <span
                        style={{
                            fontSize: "1.2rem",
                            fontWeight: "600",
                            color: "rgb(221 223 221)",
                        }}
                    >
                        (optional)
                    </span>
                </Label>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <span
                        style={{
                            backgroundColor: "#F8F9FC",
                            fontSize: "1.4rem",
                            padding: "1.2rem",
                            color: "grey",
                            height: "40px",
                        }}
                    >
                        www.eden.com/
                    </span>
                    <FormField
                        style={{
                            marginLeft: "0px",
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                        }}
                        placeholder="Display Name"
                    ></FormField>
                </div>
                <FilledButton onClick={() => dispatch(incrementPage())}>
                    Create Workspace
                </FilledButton>
            </form>
        </Wrapper>
    );
};

export default PageTwo;
