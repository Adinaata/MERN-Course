import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleNewNote = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      return toast.error("All field are required");
    }
    try {
      const res = await axios.post("http://localhost:5001/api/notes", {
        title,
        content,
      });
      console.log(res.data);
      toast.success("Notes created");
      navigate("/");
    } catch (error) {
      console.log("error in creating note", error);
      toast.error("Failed to create note");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="bg-stone-800 w-full max-w-xl mx-auto  p-6 rounded-xl">
        <form className=" " onSubmit={handleNewNote}>
          <div className="flex flex-col gap-2">
            <legend className="">Title</legend>
            <input
              type="text"
              className="input input-bordered w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <legend className="">Content</legend>
            <input
              type="text"
              className="input input-bordered w-full"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex gap-2 justify-end">
              <Link to={"/"}>
                <button className="btn btn-warning w-fit">Cancel</button>
              </Link>
              <button className="btn btn-primary w-fit" type="submit">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
