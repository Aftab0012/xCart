import React, { useState, useEffect } from "react";
import "../RegisterPage/Register.css";
import axios from "axios";
import { config } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import anime from "animejs";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let current = null;

  const backendURL = `${config.endpoint}/auth/login`;

  const animatePath = (target, offsetValue, duration) => {
    if (current) current.pause();
    current = anime({
      targets: target,
      strokeDashoffset: {
        value: offsetValue,
        duration: duration,
        easing: "easeOutQuart",
      },
      strokeDasharray: {
        value: "240 1386",
        duration: duration,
        easing: "easeOutQuart",
      },
    });
  };

  useEffect(() => {
    // Attach animation to email input focus
    const emailInput = document.querySelector("#username");
    emailInput.addEventListener("focus", () => {
      animatePath("path", 0, 700);
    });

    // Attach animation to password input focus
    const passwordInput = document.querySelector("#password");
    passwordInput.addEventListener("focus", () => {
      animatePath("path", -336, 700);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      emailInput.removeEventListener("focus", animatePath);
      passwordInput.removeEventListener("focus", animatePath);
    };
  }, [animatePath]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const data = {
        username: username,
        password: password,
      };
      const response = await axios.post(backendURL, data);
      const dataReceived = response.data.token;
      const usernameObj = response.data.username;
      console.log(dataReceived);
      console.log(response.data.message);
      persistLogin(dataReceived, usernameObj);
      // navigate("/", { state: usernameObj });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const persistLogin = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="left">
          <div className="login">Login</div>
          <div className="eula">
            <p>
              By logging in you agree to the ridiculously long terms that you
              didn't bother to read
            </p>
          </div>
        </div>
        <div className="right">
          <svg viewBox="0 0 320 300">
            <defs>
              <linearGradient
                id="linearGradient"
                x1="13"
                y1="193.49992"
                x2="307"
                y2="193.49992"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  style={{ stopColor: "#ff00ff" }}
                  offset="0"
                  id="stop876"
                />
                <stop
                  style={{ stopColor: "#ff0000" }}
                  offset="1"
                  id="stop878"
                />
              </linearGradient>
            </defs>
            <path
              d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"
              fill="none"
              stroke="url(#linearGradient)"
              strokeWidth="4"
              strokeDasharray="240 1386"
            />
          </svg>

          <form className="form">
            <label>Enter username</label>
            <input
              className="inputs"
              id="username"
              type="text"
              value={username}
              name="username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <label>Enter password</label>
            <input
              className="inputs"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button id="submit" type="submit" onClick={submitForm}>
              Submit
            </button>
            <div className="login-option">
              <p> Don't have an account ?</p>
              <Link className="login-btn" to={"/register"}>
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
