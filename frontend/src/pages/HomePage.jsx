import { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitUI from "../components/RateLimitUI";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import useAuthStore from "../Store/useAuthStore";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  // const [loading, setLoading] = useState(false);

  const { token, setLoading, loading } = useAuthStore();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5001/api/notes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("error fetching data", error);
        if (error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">
            <p>Loading...</p>
          </div>
        )}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard
                {...note}
                key={note._id}
                onDelete={() =>
                  setNotes(notes.filter((notes) => notes._id !== note._id))
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
