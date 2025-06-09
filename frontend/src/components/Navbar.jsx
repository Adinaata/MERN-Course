import { DiamondPlus } from "lucide-react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import useAuthStore from "../Store/useAuthStore";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const { clearToken } = useAuthStore();
  const handleLogout = () => {
    try {
      clearToken();
      toast.success("Log out success");
      navigate("/login");
    } catch (error) {
      console.log("error in log out", error);
    }
  };

  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4 ">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <h1 className="text-primary font-bold text-2xl cursor-default">
              ThinkBoard
            </h1>
          </Link>
          <div className="flex gap-6 ">
            <Link to={"/create"} className="btn btn-primary">
              <DiamondPlus /> New Note
            </Link>
            <button
              className="btn btn-primary hover:btn-error"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
