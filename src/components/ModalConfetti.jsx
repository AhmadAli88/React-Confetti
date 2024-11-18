
import PropTypes from "prop-types";
import Confetti from "react-confetti";

const ModalConfetti = ({ show }) => {
  return (
    <div style={{ position: "relative", width: "400px", height: "300px", border: "1px solid #ccc", margin: "20px auto" }}>
      {show && (
        <Confetti
          width={400}
          height={300}
          recycle={false} // Stop once pieces have settled
          numberOfPieces={100}
        />
      )}
      <p style={{ textAlign: "center" }}>Congratulations on your achievement!</p>
    </div>
  );
};

// Adding PropTypes validation
ModalConfetti.propTypes = {
  show: PropTypes.bool.isRequired, // 'show' must be a boolean and is required
};

export default ModalConfetti;
