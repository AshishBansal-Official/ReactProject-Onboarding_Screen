import styled from "styled-components/macro";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 20px 5px 0px;
    grid-gap: 14px;
    border-radius: 5px;
    max-width: 150px;
    cursor: pointer;

    border: ${({ isActive }) =>
        isActive ? `1px solid var(--color-primary)` : "1px solid #f1f4f8"};

    span:nth-child(2) {
        font-weight: bold;
        font-size: 14px;
    }

    span:nth-child(3) {
        font-size: 12px;
        color: grey;
    }
`;
