'use client';
import { Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';

const HeaderWords = ['Food', 'Groceries', 'Drinks'];

const HomeTextHeader = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % HeaderWords.length);
    }, 5100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Title style={{ fontFamily: 'Gotham', fontWeight: 800 }} order={1}>
      Get your{' '}
      <span className="mantine-Title text-[#F97316] text-slider__word">
        {HeaderWords[currentWordIndex]}
      </span>{' '}
      delivered to your doorstep
    </Title>
  );
};

export default HomeTextHeader;
