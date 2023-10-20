"use client";
import { useState } from "react";

export default function Home() {
  const [advice, setAdvice] = useState("");
  async function getAdvice() {
    const res = fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
    </>
  );
}
