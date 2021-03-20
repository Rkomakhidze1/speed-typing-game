import React from "react";
import useSpeedTypingGame from "./useSpeedTypingGame";

function App() {
  const {
    isTimeRunning,
    text,
    handleTextChange,
    textareaRef,
    timeRemaining,
    startGame,
    wordCount
  } = useSpeedTypingGame();

  return (
    <>
      <h1>How Fast Do You Type</h1>
      <textarea
        disabled={!isTimeRunning}
        value={text}
        onChange={handleTextChange}
        ref={textareaRef}
      />
      <h3>Time Remaining: {timeRemaining}</h3>
      <button disabled={isTimeRunning} onClick={startGame}>
        {wordCount > 0 ? "Play Again" : "Start"}
      </button>
      {wordCount > 0 && <h3>Word Count: {wordCount}</h3>}
    </>
  );
}

export default App;
