import axios from "axios";
import { CookingPot, Pencil } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import useAuthStore from "../Store/useAuthStore";

const NoteCard = ({ _id, title, content, img, onDelete }) => {
  const { token } = useAuthStore();

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:5001/api/notes/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data, "deleted");
      toast.success("Note deleted!");
      onDelete?.(); //refresh state di parent
    } catch (error) {
      console.log("error in deleting note", error);
      toast.error("fail delete note");
    }
  };

  return (
    <div className="bg-secondary p-4 rounded-lg text-black">
      <img src={img} alt="image" className="aspect-video" />
      <p className="border-b mb-6">{title}</p>
      <p>{content}</p>
      <button className="btn btn-error" onClick={handleDelete}>
        <CookingPot />
      </button>
      <Link to={`/edit/${_id}`}>
        <button className="btn btn-secondary">
          <Pencil />
        </button>
      </Link>
    </div>
  );
};

export default NoteCard;
