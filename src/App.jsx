import Room3DMap from "./Components/Room3DMap.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

    return (
        <>
        <Room3DMap />
            <Router>
                <Routes>
                    {/* <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} /> */}
                </Routes>
            </Router>
        </>
    )

}