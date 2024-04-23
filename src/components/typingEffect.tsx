import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed }: { text: string; speed: number }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        // clearInterval(interval); // Remove this line to keep the text displayed after typing
      }
    }, speed); // Adjust the speed here (milliseconds)

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className="">{displayText}</span>;
};

export default TypingEffect;
