import React from "react";
import Confetti from "react-confetti";

const ResizableConfetti = () => {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <Confetti width={dimensions.width} height={dimensions.height} />;
};

export default ResizableConfetti;
