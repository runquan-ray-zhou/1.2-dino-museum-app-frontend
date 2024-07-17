import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Rooms
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import EntranceRoom from "./Rooms/EntranceRoom.jsx";
import Room3DMap from "./Components/Room3DMap.jsx"

export default function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/map" element={<Room3DMap />} />
                    <Route path="/entranceroom" element={<EntranceRoom />} />
                </Routes>
            </Router>
        </>
    )

}