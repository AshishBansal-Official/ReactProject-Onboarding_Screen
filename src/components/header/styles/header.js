import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    --height: 2rem;

    img {
        height: var(--height);
    }

    span {
        font-weight: bold;
        font-size: var(--height);
        margin-left: 4px;
    }
`;
