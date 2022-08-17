import React from "react";
import { Container } from "./styles/header";

const Header = () => {
    return (
        <Container>
            <img src="logo.svg" alt="" />
            <span>Eden</span>
        </Container>
    );
};

export default Header;
