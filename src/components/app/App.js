import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./../navBar/NavBar";
import UsersPage from "../../pages/usersPage/UsersPage";
import UserPage from "./../../pages/userPage/UserPage";

import "./app.scss";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <NavBar />
                <main className="container">
                    <Routes>
                        <Route path="/users" element={<UsersPage />} />
                        <Route path="users/:id" element={<UserPage />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
