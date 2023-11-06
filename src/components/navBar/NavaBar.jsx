import { Link } from "react-router-dom";
import { useAuth } from "../login/authProvider";

const NavaBar = () => {
  const userData = useAuth();
  console.log(userData.value.loged);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
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
