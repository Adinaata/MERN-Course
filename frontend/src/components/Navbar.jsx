import { DiamondPlus } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4 ">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <h1 className="text-primary font-bold text-2xl cursor-default">
              ThinkBoard
            </h1>
          </Link>
          <Link to={"/create"} className="btn btn-primary">
            <DiamondPlus /> New Note
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
