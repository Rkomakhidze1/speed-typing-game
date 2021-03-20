import { useState, useEffect, useRef } from 'react';

function useSpeedTypingGame() {
  const TIME_REMAINING = 10;
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(TIME_REMAINING);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const textareaRef = useRef(null);

  function handleTextChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function countWords() {
    const wordsArr = text.trim().split(' ');
    const filteredWordsArr = wordsArr.filter((word) => word !== '');
    setWordCount(filteredWordsArr.length);
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(TIME_REMAINING);
    setText('');
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(function () {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false);
      countWords();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimeRunning, timeRemaining]);

  return {
    isTimeRunning,
    text,
    handleTextChange,
    textareaRef,
    timeRemaining,
    startGame,
    wordCount,
  };
}

export default useSpeedTypingGame;
