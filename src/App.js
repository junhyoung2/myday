import { useEffect, useState } from "react";
import "./App.scss";
import Loginform from "./components/Loginform";
import Time from "./components/Time";
import Mainpage from "./components/Mainpage";
import Weather from "./components/Weather";
import Theme from "./components/Theme";

const App = () => {
    const USER_KEY = "user_name";
    const THEME_KEY = "is_dark_mode";
    const [user, setUser] = useState("");
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem(THEME_KEY);
        return savedTheme ? JSON.parse(savedTheme) : false;
    });
    useEffect(() => {
        const saved = localStorage.getItem(USER_KEY);
        if (saved) {
            setUser(saved);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem(THEME_KEY, JSON.stringify(isDark));
        document.body.classList.toggle("dark-mode", isDark);
    }, [isDark]);
    const handleThemeChange = () => {
        setIsDark((prev) => !prev);
    };
    const handleLogin = (data) => {
        localStorage.setItem(USER_KEY, data);
        setUser(data);
    };
    const handleLogout = () => {
        localStorage.removeItem(USER_KEY);
        setUser("");
    };
    return (
        <div className={`app ${isDark ? "dark-mode" : ""}`}>
            <Theme isDark={isDark} onThemeChange={handleThemeChange} />
            <Weather />
            <Time />
            {user ? (
                <Mainpage user={user} onLogout={handleLogout} />
            ) : (
                <Loginform onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;
