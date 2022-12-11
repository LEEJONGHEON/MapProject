import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App.js/>} />
                <Route path="/test1" element={<GetLocation/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default Router;