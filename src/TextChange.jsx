import React, { useState, useEffect } from 'react';

const TextChange = () => {
  const texts = ["Hii👋, Myself Pujan Sarkar"];
  const [currentText, setCurrentText] = useState('');
  const [endValue, setEndValue] = useState(1); 
  const [isForward, setIsForward] = useState(true); 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        
        setEndValue((prev) => prev + 1);
      } else {
       
        setEndValue((prev) => prev - 1);
      }

      // Handle the end of the text
      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }

      
      if (endValue < 1) {
        setIsForward(true); 
        setIndex((prev) => (prev + 1) % texts.length); 
        setEndValue(1); 
      }
    }, 100); 

    return () => clearInterval(intervalId); 
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
