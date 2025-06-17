import Quote from "./Quote";

const Mainpage = ({user,onLogout}) => {
    return (
        <div>
            {/* 홍길동 님 반가워요 */}
            <h2>{user}님, 반가워요.</h2>
            <button onClick={onLogout}>로그아웃</button>
            <Quote/>
        </div>
    );
};

export default Mainpage;