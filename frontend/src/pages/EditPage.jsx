import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router";
import useAuthStore from "../Store/useAuthStore";

const EditPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");

  const navigate = useNavigate();
  const { token, setLoading, loading } = useAuthStore();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5001/api/notes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTitle(res.data.title);
        setContent(res.data.content);
        setImg(res.data.img);
      } catch (error) {
        toast.error("error fetching note", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleEditNote = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await axios.put(
        `http://localhost:5001/api/notes/${id}`,
        {
          title,
          content,
          img,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Note updated");
      navigate("/");
    } catch (error) {
      toast.error("error updating note", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="bg-stone-800 w-full max-w-xl mx-auto  p-6 rounded-xl">
        {loading && (
          <div className="text-center text-primary py-10">
            <p>Loading...</p>
          </div>
        )}

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
            <legend className="">Image URL</legend>
            <input
              type="text"
              className="input input-bordered w-full"
              value={img}
              onChange={(e) => setImg(e.target.value)}
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
