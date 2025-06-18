import { use, useEffect, useState } from "react";
import "./App.scss";
import Loginform from "./components/Loginform";
import Time from "./components/Time";
import Mainpage from "./components/Mainpage";

import bgIMG from './images/img-3.jpg';
import Weather from "./components/Weather";

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
    {/* <img src="./images/img-1.jpg" alt="이미지1" /> */}
   {/* <img src={`${process.env.PUBLIC_URL}/images/img-1.jpg`} alt="이미지1" /> */}
   {/* <img src={bgIMG} alt="이미지 3"/> */}
   <Weather/>
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
