import "../styles/Button.css";

function Button({ onClick }) {
  return (
    <button className="button" onClick={onClick}>
      확인
    </button>
  );
}

export default Button;
