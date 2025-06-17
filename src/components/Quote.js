import { useEffect, useState } from "react";

const quotes = [
  "너 자신을 알라.\n– 소크라테스",
  "생각이 운명을 만든다.\n– 마하트마 간디",
  "나는 생각한다, 고로 존재한다.\n– 데카르트",
  "실패는 성공의 어머니다.\n– 토마스 에디슨",
  "천 리 길도 한 걸음부터.\n– 노자",
  "기회는 준비된 자에게 온다.\n– 파스퇴르",
  "행동은 모든 성공의 기초다.\n– 파블로 피카소",
  "지식은 힘이다.\n– 프랜시스 베이컨",
  "성공하려면 사랑하라.\n– 스티브 잡스",
  "시간은 금이다.\n– 벤자민 프랭클린"
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
