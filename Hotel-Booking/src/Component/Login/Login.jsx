import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");

  const { login } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name) {
      alert("Enter Name");
      return;
    }

    login(name);

    alert(`Welcome ${name}`);

    navigate("/about");
  };

  return (
    <div className="p-10">
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;