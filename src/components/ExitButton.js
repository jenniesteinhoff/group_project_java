import { Link } from "react-router-dom";

const ExitButton = () => {
  return (
    <div>
      <h2>Thank you for playing! You can now close the window.</h2>
      <Link to="/">
        <button>Go back!</button>
      </Link>
    </div>
  );
}

export default ExitButton;


