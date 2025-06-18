import { useEffect, useState } from "react";

const Weather = () => {
    const API_KEY = "a979a13bc0bd210878acc69bd4984cba";
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("위치 정보를 지원하지 않는 브라우저입니다.");
            setLoading(false);
            return;
        }
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`;
            fetch(URL)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("데이터 요청 실패!");
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setWeather(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError("날씨 정보를 불러오는데 실패했습니다.");
                    setLoading(false);
                });
        });
        console.log(weather);
    }, []);

    return (
    <div className="weather">
        {
            weather && (
                <>
                <h3>{weather.name}</h3>
                <h3>{weather.main.temp.toFixed(0)}℃</h3>
                <h3>{weather.weather[0].description}</h3>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>
                </>
            )
        }
    </div>
    );
};

export default Weather;