import React from "react";
import { Wrapper } from "./styles/header";

const Header = ({ title, subtitle }) => {
    return (
        <Wrapper>
            <span>{title}</span>
            <span>{subtitle}</span>
        </Wrapper>
    );
};

export default Header;
