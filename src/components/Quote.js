import { useEffect, useState } from "react";

const quotes = [
  "너 자신을 알라.",
  "생각이 운명을 만든다.",
  "나는 생각한다, 고로 존재한다.",
  "실패는 성공의 어머니다.",
  "천 리 길도 한 걸음부터.",
  "기회는 준비된 자에게 온다.",
  "행동은 모든 성공의 기초다.",
  "지식은 힘이다.",
  "성공하려면 사랑하라.",
  "시간은 금이다."
];




const Quote = () => {
    const [Quote,setQuote]=useState('');
    useEffect(()=>{
        const random =Math.floor(Math.random()*quotes.length);
       setQuote(quotes[random]);
    },[]);
    //랜덤하게 명언 추출
    // Math.random();
    return (
        <div className="ment">
            오늘의 명언 : "{Quote}"
        </div>
    );
};

export default Quote;
