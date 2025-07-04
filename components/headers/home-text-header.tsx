'use client';
import { Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';

const HeaderWords = ['Food', 'Groceries', 'Drinks'];

const HomeTextHeader = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const wordChangeInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % HeaderWords.length);
    }, 2000);

    return () => clearInterval(wordChangeInterval);
  }, []);

  return (
    <Title style={{ fontFamily: 'Gotham', fontWeight: 800 }} order={1}>
      Get your <span style={{ color: '#F97316' }}>{HeaderWords[currentWordIndex]}</span> delivered
      to your doorstep
    </Title>
  );
};

export default HomeTextHeader;
