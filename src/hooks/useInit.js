import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import axios from "axios";

const useInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/auth/getMe")
      .then((res) => dispatch(setUser(res.data)))
      .catch(() => dispatch(setUser(null)));
  }, [dispatch]);

  return;
};
export default useInit;
