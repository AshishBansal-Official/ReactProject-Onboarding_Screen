import styled from "styled-components/macro";

export const StepperContainer = styled.div`
    --active-color: var(--color-primary);
    --step-size: 3.4rem;
    --min-step-size: 30px;
    --disabled-color: #f1f4f8;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    div:not(:first-child) .left_stepper_line {
        flex: 1;
        height: 1.3px;
        max-width: var(--min-step-size);
    }

    div:not(:last-child) .right_stepper_line {
        flex: 1;
        height: 1.3px;
        max-width: var(--min-step-size);
    }

    div:first-child .left_stepper_line {
        max-width: var(--min-step-size);
        flex: 1;
        height: 0;
    }

    div:last-child .right_stepper_line {
        flex: 1;
        max-width: var(--min-step-size);
        height: 0;
    }
`;

export const Step = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    width: 100%;
    max-width: calc(var(--step-size) + (2 * var(--min-step-size)));

    .stepper_circle {
        min-width: var(--step-size);
        min-height: var(--step-size);
        border-radius: 50%;
        background-color: ${({ isActive }) =>
            isActive ? `var(--active-color)` : `transparent`};
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({ isActive }) => (isActive ? "white" : "black")};
        border: ${({ isActive }) =>
            isActive ? "none" : `1px solid var(--disabled-color)`};
        font-size: 1rem;
    }

    .left_stepper_line {
        background-color: ${({ isActive }) =>
            isActive ? `var(--active-color)` : `var(--disabled-color)`};
    }

    .right_stepper_line {
        background-color: ${({ isActive }) =>
            isActive ? `var(--active-color)` : `var(--disabled-color)`};
    }
`;
