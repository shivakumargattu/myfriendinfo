import React, { useState, useEffect } from 'react';
import "./index.css"

const NumberCard = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (number1 < 333) {
        setNumber1((prevNumber) => prevNumber + 1);
      } else {
        clearInterval(interval1);
      }
    }, 10);

    const interval2 = setInterval(() => {
      if (number2 < 852) {
        setNumber2((prevNumber) => prevNumber + 1);
      } else {
        clearInterval(interval2);
      }
    }, 10);

     
    const interval3 = setInterval(() => {
        if (number3 < 2) {
          setNumber3((prevNumber) => prevNumber + 1);
        } else {
          clearInterval(interval3);
        }
      }, 10);
      const interval4 = setInterval(() => {
        if (number4 < 25) {
          setNumber4((prevNumber) => prevNumber + 1);
        } else {
          clearInterval(interval4);
        }
      }, 10);
    

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, [number1, number2]);

  return (
    <div className="card-container-counter">

    
      <div className="card-counetr  ">
        <div>
         <h1 className='counter-text'>  {number1} +</h1>
         <p className='counter-text-descripion'>Active Clients</p>
        </div>
      </div>

      <div className="card-counetr ">
        <div>
          <h1 className='counter-text'>{number2} +</h1>
          <p className='counter-text-descripion'>Projects Done</p>
        </div>  
      </div>


      <div className="card-counetr ">
        <div>
           <h1 className='counter-text'> {number3} +</h1>
           <p className='counter-text-descripion'>Years</p>
        </div>
      </div>

      <div className="card-counetr  ">
        <div>
         <h1 className='counter-text'>  {number4} +</h1>
         <p className='counter-text-descripion'>Team Advisors</p>
         </div>
      </div>
      
    </div>
  );
};

export default NumberCard;
