import React from "react";
import Header from "../components/header";
import { FilledButton } from "../components/FilledButton";
import { CheckIcon } from "./styles/page_4.js";

const PageFour = () => {
    return (
        <>
            <CheckIcon>
                <img src="check_icon.png" alt="" />
            </CheckIcon>
            <Header
                title="Congratulations, Eren!"
                subtitle="You have completed onboarding, you can start using the Eden!"
            ></Header>
            <div
                style={{
                    marginBottom: "5px",
                }}
            ></div>
            <FilledButton
                style={{
                    maxWidth: "350px",
                }}
            >
                Launch Eden
            </FilledButton>
        </>
    );
};

export default PageFour;
