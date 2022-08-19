import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 4rem 0;
    width: 100%;
    max-width: 350px;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-bottom: 5px;
`;

export const Card = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    gap: 10px;
    border-radius: 5px;
    border: ${({ isActive }) =>
        isActive ? `1px solid var(--color-primary)` : "1px solid #f1f4f8"};
    cursor: pointer;

    span:first-child {
        background-color: red;
    }

    span:nth-child(2) {
        font-weight: bold;
        font-size: 14px;
    }

    span:nth-child(3) {
        font-size: 12px;
        color: grey;
    }
`;
