import React from "react";
import { useDispatch } from "react-redux";
import { setselectedThemeIndex } from "../features/theme/themeSlice";

const ColorButton = ({ index, color, iconUrl, size, selected }) => {
    const dispatch = useDispatch();

    return (
        <div
            style={{
                height: size,
                width: size,
                backgroundColor: color,
                borderRadius: "50%",
                outline: selected ? `1px solid ${color}` : "",
                border: selected ? "2px solid white" : "",
                transition: "transform 1s",
                transform: selected ? "scale(1.1)" : "",
                cursor: "pointer",
            }}
            onClick={() => {
                const favicon = document.getElementById("favicon");
                favicon.href = iconUrl;
                dispatch(setselectedThemeIndex({ selectedThemeIndex: index }));
            }}
        ></div>
    );
};

export default ColorButton;
