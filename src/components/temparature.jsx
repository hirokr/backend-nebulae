"use client";
import { useState } from "react";

const Temparature = () => {
  const [fahrenheit, setFahrenheit] = useState(32);
  const [celsius, setCelsius] = useState(0);
  
  const handleFehrenheit = (e)=>{
    setCelsius((e - 32) * 5 / 9);
    setFahrenheit(e)
  }

  const handleCelsius = (e)=>{
    setFahrenheit((e*9/5)+32);
    setCelsius(e)
  }

  return (
    <div className='flex justify-center items-center flex-col my-5 mb-10'>
      <h1 className='text-purple-800 text-2xl font-semibold'>
        Fahrenheit to Celsius
      </h1>
      <div className='flex justify-center items-center gap-5'>
        <span>
          <h2>Fahrenheit</h2>
          <input
            className='p-2 border-none outline-purple-500 w-24'
            type='number'
            value={fahrenheit}
            onChange={(e) => handleFehrenheit(Number(e.target.value))}
          />
        </span>
        <h1 className='text-3xl text-white '> = </h1>
        <span>
          <h2>Celsius</h2>
          <input
            className='p-2 border-none outline-purple-500 w-24'
            type='number'
            value={celsius}
            onChange={(e) => handleCelsius(Number(e.target.value))}
          />
        </span>
      </div>
    </div>
  );
};

export default Temparature;
