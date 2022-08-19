import { useSelector } from "react-redux";
import "./App.css";
import { Header, Stepper, PageProvider } from "./components";
import ColorButton from "./components/ColorButton";

function App() {
    var selectedThemeIndex = useSelector(
        (state) => state.myTheme.selectedThemeIndex
    );
    const themes = [
        { color: "#664DE5", url: "logo.svg" },
        { color: "#322e2f", url: "logo1.svg" },
        { color: "red", url: "logo2.svg" },
    ];

    return (
        <div
            className="app"
            style={{
                "--color-primary": `${themes[selectedThemeIndex].color}`,
            }}
        >
            <Header src={themes[selectedThemeIndex].url}></Header>
            <div style={{ height: "4vw", maxHeight: "60px" }}></div>
            <Stepper totalSteps="4"></Stepper>
            <div style={{ height: "4.5vw", maxHeight: "70px" }}></div>
            <PageProvider></PageProvider>
            <div style={{ height: "1.3vw", maxHeight: "30px" }}></div>
            <div
                style={{
                    gap: "10px",
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                {themes.map((theme, index) => {
                    return (
                        <ColorButton
                            color={theme.color}
                            iconUrl={theme.url}
                            size={"30px"}
                            selected={selectedThemeIndex === index}
                            index={index}
                            key={index}
                        ></ColorButton>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
