import React from "react";
import { useSelector } from "react-redux";
import { StepperContainer, Step } from "./styles/stepper";

const Stepper = ({ totalSteps }) => {
    const selectedStep = useSelector((state) => state.selectedPage.value);

    return (
        <>
            <StepperContainer>
                {Array.from({ length: parseInt(totalSteps) }, (_, index) => {
                    return (
                        <Step
                            isActive={index < parseInt(selectedStep)}
                            key={index}
                        >
                            <div className="left_stepper_line"></div>
                            <div className="stepper_circle">{index + 1}</div>
                            <div className="right_stepper_line"></div>
                        </Step>
                    );
                })}
            </StepperContainer>
        </>
    );
};

export default Stepper;
