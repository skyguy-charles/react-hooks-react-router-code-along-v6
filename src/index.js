import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import UserCard from "./components/UserCard";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);
<StrictMode>
    <UserCard/>
</StrictMode>