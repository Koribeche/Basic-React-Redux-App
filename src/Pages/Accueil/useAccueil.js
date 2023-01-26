import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../features/posts/postsSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAccueil = () => {
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    setisLoading(true);
    axios
      .get("/api/posts")
      .then((res) => dispatch(setPosts(res.data)))
      .catch((err) => setisError("Une erreur est survenue"))
      .finally(() => setisLoading(false));
  }, []);

  return {
    isLoading,
    isError,
    user,
    posts,
    navigate,
  };
};
export default useAccueil;
