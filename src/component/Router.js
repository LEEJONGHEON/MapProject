import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Aed from "./Map/Aed";
import Hospital from "./Map/Hospital";
import Emergency from "./Map/Emergency";
import Rescue from "./Rescue";
import MapPicture from "./Map/MapPicture";
import Board from "./Board/Board";
import Search from "./Search/Search";
import Aedsearch from "./Search/Aedsearch";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Mainpage" element={<MainPage/>} />
                <Route path="/Aed" element={<Aed/>} />
                <Route path="/Hospital" element={<Hospital />} />
                <Route path="/Emergency" element={<Emergency />} />
                <Route path="/Rescue" element={<Rescue />} />
                <Route path="/MapPicture" element={<MapPicture />} />
                <Route path="/Board" element={<Board />} />
                <Route path="/Search" element={<Search />} />
                <Route path="/Aedsearch" element={<Aedsearch />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;