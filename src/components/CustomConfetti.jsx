
import Confetti from "react-confetti";

const CustomConfetti = () => {
  return (
    <div>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={200}
        gravity={0.2}
        colors={["#FF0000", "#00FF00", "#0000FF", "#FFFF00"]} // Custom colors
      />
    </div>
  );
};

export default CustomConfetti;
