import { useContext, useState } from "react";
import { AutoContext } from "../AutoContex/AutoContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const { login } = useContext(AutoContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name.trim()) {
      alert("Enter Name");
      return;
    }

    login(name.trim());
    alert(`Welcome ${name.trim()}`);
    navigate("/about");
  };

  return (
    <div className="p-10">
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;