import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserDetailPage from "./components/UserDetailPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="user/:id" element={<UserDetailPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
