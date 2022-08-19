import React from "react";
import { Container } from "./styles/header";

const Header = ({ src }) => {
    return (
        <Container>
            <img src={src} alt="" />
            <span>Eden</span>
        </Container>
    );
};

export default Header;
