import "./App.css";
import { Header, Stepper, PageProvider } from "./components";

function App() {
    return (
        <div className="app">
            <Header></Header>
            <div className="app__spacer"></div>
            <Stepper totalSteps="4"></Stepper>
            <div className="app__spacer"></div>
            <PageProvider></PageProvider>
        </div>
    );
}

export default App;
