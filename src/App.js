import { use, useEffect, useState } from "react";
import "./App.scss";
import Loginform from "./components/Loginform";
import Time from "./components/Time";
import Mainpage from "./components/Mainpage";

const App = () => {
    const USER_KEY = "user_name";
    const [user, setUser] = useState("");
    useEffect(() => {
        const saved = localStorage.getItem(USER_KEY);
        if (saved) {
            setUser(saved);
        }
    });
    const handleLogin = (data) => {
        localStorage.setItem(USER_KEY, data);
        setUser(data);
    };
    const handleLogout =()=>{
      localStorage.removeItem(USER_KEY);
      setUser('');
    }
    return (
        <div className="app">
            <Time />
            {user ? (
                <Mainpage user={user} onLogout={handleLogout}/>
            ) : (
                <Loginform onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;
