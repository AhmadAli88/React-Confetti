import { useState } from "react";
import Confetti from "react-confetti";

const TriggeredConfetti = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Stop after 3 seconds
  };

  return (
    <div>
      <button onClick={handleClick}>Celebrate!</button>
      {showConfetti && <Confetti />}
    </div>
  );
};

export default TriggeredConfetti;
