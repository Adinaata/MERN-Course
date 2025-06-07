import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router";

const EditPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/notes/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        toast.error("error fetching note", error);
      }
    };

    fetchNote();
  }, [id]);

  const handleEditNote = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5001/api/notes/${id}`, {
        title,
        content,
      });
      toast.success("Note updated");
      navigate("/");
    } catch (error) {
      toast.error("error updating note", error);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="bg-stone-800 w-full max-w-xl mx-auto  p-6 rounded-xl">
        <form onSubmit={handleEditNote}>
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
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
