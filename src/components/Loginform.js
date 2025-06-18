import { useState } from "react";

const Loginform = ({ onLogin }) => {
     const [user, setUser] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = user.trim();
        if(trimmed){
        onLogin(user);
        setUser("");
        }
    };

    return (
        <div className="main">
        <form onSubmit={handleSubmit}>
            <h2>이름을 입력해주세요.</h2>
            <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="이름"
            />
            <button type="submit">입장하기</button>
        </form>
        </div>
    );
};

export default Loginform;