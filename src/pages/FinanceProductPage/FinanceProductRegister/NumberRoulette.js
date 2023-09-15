import React, { useEffect, useState } from 'react';

const NumberRoulette = ({ initialNumber }) => {
  const [animatedDigits, setAnimatedDigits] = useState(String(initialNumber).split(''));
  
  useEffect(() => {
    if (initialNumber === null) return;
    
    const balanceStr = String(initialNumber);
    const digitsArray = balanceStr.split('');

    const animations = [];

    if (animatedDigits.length !== balanceStr.length) {
      setAnimatedDigits(prevDigits => {
        let lengthDifference = balanceStr.length - prevDigits.length;

        if (lengthDifference > 0) {
          let newZeros = Array.from({ length: lengthDifference }, () => '0');
          return [...newZeros, ...prevDigits];
        } else if (lengthDifference < 0) {
          return prevDigits.slice(-lengthDifference);
        }
        return prevDigits;
      });
    }

    digitsArray.forEach((digit, index) => {
      let animation = setInterval(() => {
        setAnimatedDigits(prevDigits => {
          const updatedDigits = [...prevDigits];
          const randomDigit = Math.floor(Math.random() * 10);
          updatedDigits[index] = randomDigit.toString();
          return updatedDigits;
        });
      }, 25);

      animations.push(animation);

      setTimeout(() => {
        clearInterval(animation);
        setAnimatedDigits(prevDigits => {
          const updatedDigits = [...prevDigits];
          updatedDigits[index] = digit;
          return updatedDigits;
        });
      }, 200 + index * 300);
    });

    return () => {
      animations.forEach(anim => clearInterval(anim));
    };

  }, [initialNumber]);

  const localizedNumber = parseInt(animatedDigits.join(''), 10).toLocaleString();
  
  return <span>{localizedNumber}</span>;
};

export default NumberRoulette;