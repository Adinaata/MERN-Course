import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Link } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5001/login", {
        username,
        password,
      });
      const token = res.data.token;
      localStorage.setItem("token", token); //saving token
      navigate("/");
    } catch (error) {
      console.error(error);
      setErrorMsg(error.response?.data?.message || "login failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="bg-stone-800 w-full max-w-xl mx-auto  p-6 rounded-xl">
        <h1 className="text-xl font-medium text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <h1 className="my-2">Username</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            className="input input-bordered w-full"
            onChange={(e) => setUsername(e.target.value)}
          />
          <h1 className="my-2">Password</h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="input input-bordered w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex mt-6 items-center gap-8 justify-end">
            <Link to={"/register"}>
              <p className="text-sm text-gray3400 hover:text-gray-400">
                Don't have account? Register here
              </p>
            </Link>
            <button className="btn btn-primary w-fit" type="submit">
              Login
            </button>
          </div>
        </form>

        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
