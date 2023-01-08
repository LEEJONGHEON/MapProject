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
import Login from "./Login";
import PwdUpdate from "./PwdUpdate";
import EmailInput from "./EmailInput";
import Join from "./Join";
import Information from "./Information";
import Update from "./Update";
import PrivateRoute from "../Router/PrivateRoute";

const Router = () => {
    const access = localStorage.getItem('LOGIN_USERID');
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/Aed" element={<Aed/>} />
                <Route path="/Hospital" element={<Hospital />} />
                <Route path="/Emergency" element={<Emergency />} />
                <Route path="/Rescue" element={<Rescue />} />
                <Route path="/MapPicture" element={<MapPicture />} />
                <Route path="/Board" element={<Board />} />
                <Route path="/Search" element={<Search />} />
                <Route path="/Aedsearch" element={<Aedsearch />} />
                <Route path="/Join" element={<Join/>} />
                <Route path="/Login" element={<Login />} />
                <Route path="/PwdUpdate" element={<PrivateRoute authenticated={access} component={<PwdUpdate />}/>}/>
                <Route path="/EmailInput" element={<PrivateRoute authenticated={access} component={<EmailInput />}/>}/>
                <Route path="/Information" element={<PrivateRoute authenticated={access} component={<Information />}/>}/>
                <Route path="/Update" element={<PrivateRoute authenticated={access} component={<Update />}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;