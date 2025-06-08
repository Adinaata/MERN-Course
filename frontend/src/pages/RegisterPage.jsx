import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Link } from "react-router";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const navigate = useNavigate();
  //   const [errorMsg, setErrorMsg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault(); //for not reloading in submit
    try {
      await axios.post("http://localhost:5001/register", {
        username: username,
        password: password,
      });

      if (!username || !password) {
        return toast.error("Username and password cannot be empty");
      }

      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "fail to register");
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="bg-stone-800 w-full max-w-xl mx-auto  p-6 rounded-xl">
        <h1 className="text-xl font-medium text-center">Register</h1>
        <form onSubmit={handleRegister}>
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
            <Link to={"/login"}>
              <p className="text-sm text-gray3400 hover:text-gray-400">
                Already have account? Login here
              </p>
            </Link>
            <button className="btn btn-primary w-fit" type="submit">
              Register
            </button>
          </div>
        </form>

        {/* {errorMsg && <p className="text-red-500">{errorMsg}</p>} */}
      </div>
    </div>
  );
};

export default RegisterPage;
