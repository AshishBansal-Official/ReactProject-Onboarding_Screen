import styled from "styled-components/macro";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span:first-child {
        font-size: 2.5rem;
        font-weight: bold;
        margin: 1rem 0;
        text-align: center;
    }

    span:nth-child(2) {
        font-size: 1rem;
        font-weight: 500;
        color: grey;
        text-align: center;
        font-size: 1.4rem;
        text-align: center;
    }
`;
