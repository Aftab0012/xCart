import "./App.css";
import Homepage from "./Components/Homepage";
import Login from "./Components/LoginPage/Login";
import Register from "./Components/RegisterPage/Register";
import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";

export const config = {
  endpoint: `http://localhost:3000`,
};

function App() {
  return (
    <div className="App">
      {/* <ToastContainer /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
