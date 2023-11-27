import { Link } from "react-router-dom";
import { useAuth } from "../login/authProvider";

const NavaBar = () => {
  const userData = useAuth();
  console.log(userData.value.loged);
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/player">Player</Link>
        </li>
        <li>
          <Link to="/inputs">Inputs</Link>
        </li>
        {!userData.value?.loged ? (
          <></>
        ) : (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export { NavaBar };
