import React, { useEffect, useState } from 'react';

const NumberRoulette = ({ initialNumber }) => {
  const [animatedDigits, setAnimatedDigits] = useState(String(initialNumber).split(''));

  useEffect(() => {
    if (initialNumber === null) return;
    
    let balanceStr = String(initialNumber);
    let digitsArray = balanceStr.split('');

    if (animatedDigits.length !== balanceStr.length) {
      let lengthDifference = balanceStr.length - animatedDigits.length;

      if (lengthDifference > 0) {
        let newZeros = Array.from({ length: lengthDifference }, () => '0');
        setAnimatedDigits([...newZeros, ...animatedDigits]);
      } else if (lengthDifference < 0) {
        setAnimatedDigits(animatedDigits.slice(-lengthDifference));
      }
    }

    let animatedDigitsTemp = [...animatedDigits];

    digitsArray.forEach((digit, index) => {
      let animation = setInterval(() => {
        const randomDigit = Math.floor(Math.random() * 10);
        animatedDigitsTemp[index] = randomDigit.toString();
        setAnimatedDigits([...animatedDigitsTemp]);
      }, 25);

      setTimeout(() => {
        clearInterval(animation);
        animatedDigitsTemp[index] = digit;
        setAnimatedDigits([...animatedDigitsTemp]);
      }, 200 + index * 300);
    });

  }, [initialNumber]);

  // Join the digits and convert them to a number, then to a locale string.
  const localizedNumber = parseInt(animatedDigits.join(''), 10).toLocaleString();
  
  return <span>{localizedNumber}</span>;
};

export default NumberRoulette;