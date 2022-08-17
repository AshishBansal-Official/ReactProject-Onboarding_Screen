import "./App.css";
import { Header, Stepper, PageProvider } from "./components";

function App() {
    return (
        <div className="app">
            <Header></Header>
            <div style={{ height: "40px" }}></div>
            <Stepper totalSteps="4"></Stepper>
            <div style={{ height: "60px" }}></div>
            <PageProvider></PageProvider>
        </div>
    );
}

export default App;
