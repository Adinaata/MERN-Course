import { DiamondPlus } from "lucide-react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
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
